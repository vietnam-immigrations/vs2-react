import React, {
  MutableRefObject,
  ReactEventHandler,
  useCallback,
  useEffect,
  useState
} from "react";
import ReactCrop, { centerCrop, Crop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { MuiFileInput } from "mui-file-input";
import Grid from "@mui/material/Grid";

interface ImageCropUploadProps {
  onCropComplete: (croppedFile: File | null) => void;
  label: string;
  className: string;
  resetFileRef: MutableRefObject<(() => void) | null>;
}

export default function ImageCropUpload({
  onCropComplete,
  label,
  className,
  resetFileRef
}: ImageCropUploadProps) {
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null); // state for cropped image URL
  const [crop, setCrop] = useState<Crop>();
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [originalFile, setOriginalFile] = useState<File | null>(null);

  useEffect(() => {
    resetFileRef.current = () => {
      setOriginalFile(null);
    };

    return () => {
      resetFileRef.current = null; // cleanup
    };
  }, [resetFileRef]);

  useEffect(() => {
    if (originalFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setOriginalImageUrl(reader.result as string);
        setFileName(originalFile.name);
        setFileType(originalFile.type);
      };
      reader.readAsDataURL(originalFile);
    } else {
      setOriginalImageUrl(null);
      setFileName("");
      setFileType("");
    }
  }, [originalFile]);

  const onImageLoaded: ReactEventHandler<HTMLImageElement> = (e) => {
    setImageRef(e.currentTarget);

    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
    const initialCrop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90
        },
        4 / 6,
        width,
        height
      ),
      width,
      height
    );

    setCrop(initialCrop);
    onCropCompleteFunc(initialCrop);
  };

  const getCroppedImg = useCallback(
    (
      image: HTMLImageElement,
      crop: Crop,
      callback: (blob: Blob) => void
    ): void => {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width!;
      canvas.height = crop.height!;
      const ctx = canvas.getContext("2d");

      ctx!.drawImage(
        image,
        crop.x! * scaleX,
        crop.y! * scaleY,
        crop.width! * scaleX,
        crop.height! * scaleY,
        0,
        0,
        crop.width!,
        crop.height!
      );

      canvas.toBlob((blob) => {
        if (blob) {
          callback(blob);
        }
      }, fileType);
    },
    [fileType]
  );

  const onCropCompleteFunc = useCallback(
    (crop: Crop) => {
      if (imageRef && crop.width && crop.height) {
        getCroppedImg(imageRef, crop, (croppedBlob: Blob) => {
          const croppedFile = new File([croppedBlob], `cropped-${fileName}`, {
            type: fileType
          });

          setCroppedImageUrl(URL.createObjectURL(croppedBlob));

          onCropComplete(croppedFile);
        });
      } else {
        onCropComplete(null);
      }
    },
    [imageRef, fileName, fileType, onCropComplete, getCroppedImg]
  );

  return (
    <div>
      <MuiFileInput
        size="small"
        inputProps={{ accept: "image/*" }}
        onChange={setOriginalFile}
        label={label}
        fullWidth
        required
        className={className}
        value={originalFile}
      />
      <Grid container spacing={2}>
        <Grid item xs={10}>
          {originalImageUrl && (
            <ReactCrop
              style={{
                marginTop: "1rem",
                width: "100%"
              }}
              aspect={4 / 6}
              crop={crop}
              ruleOfThirds
              onComplete={onCropCompleteFunc}
              onChange={(newCrop) => setCrop(newCrop)}
            >
              <img
                width="100%"
                src={originalImageUrl}
                onLoad={onImageLoaded}
                alt="Preview"
              />
            </ReactCrop>
          )}
        </Grid>
        <Grid item xs={2}>
          {originalImageUrl && croppedImageUrl && (
            <div style={{ marginTop: "1rem" }}>
              <img width="100%" src={croppedImageUrl} alt="Cropped Preview" />
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

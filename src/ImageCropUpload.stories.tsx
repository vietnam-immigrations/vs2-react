import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ImageCropUpload, ImageCropUploadProps } from "./index";

export default {
  title: "ImageCropUpload",
  component: ImageCropUpload,
  args: {
    label: "Upload Image",
    className: "image-upload-class"
  }
} as Meta;

export const Default: StoryFn<ImageCropUploadProps> = (args) => {
  const resetFileRef = React.useRef<(() => void) | null>(null);
  const resetFileRef2 = React.useRef<(() => void) | null>(null);

  const handleCropComplete = (croppedFile: File | null) => {
    console.log("Cropped File:", croppedFile);
  };

  const handleCropComplete2 = (croppedFile: File | null) => {
    console.log("Cropped File:", croppedFile);
  };

  return (
    <>
      <ImageCropUpload {...args} onCropComplete={handleCropComplete} resetFileRef={resetFileRef} />
      <ImageCropUpload {...args} onCropComplete={handleCropComplete2} resetFileRef={resetFileRef2} />
    </>
  );
};

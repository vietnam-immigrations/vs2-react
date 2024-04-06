"use client";

import React, { useEffect, useState } from "react";
import { MuiFileInput } from "mui-file-input";

export interface ImageUploadProps {
  onImageSelect: (selectedImage: File | null) => void;
  label: string;
  className: string;
  value: File | null;
}

export function ImageUpload({ onImageSelect, label, className, value }: ImageUploadProps) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (value) {
      const reader = new FileReader();
      reader.onload = () => {
        setSrc(reader.result as string);
      };
      reader.readAsDataURL(value);
    } else {
      setSrc(null);
    }
  }, [value]);

  const handleFileChange = (file: File | null) => {
    // Notify parent of the selected file
    onImageSelect(file);
  };

  return (
    <div>
      <MuiFileInput
        size="small"
        inputProps={{ accept: "image/*" }}
        onChange={handleFileChange}
        label={label}
        fullWidth
        required
        className={className}
        value={value}
      />
      {src && <img style={{ marginTop: "1rem", width: "100%" }} src={src} alt="Preview" />}
    </div>
  );
}

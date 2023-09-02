import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ImageUpload, ImageUploadProps } from "./index";

export default {
  title: "ImageUpload",
  component: ImageUpload
} as Meta;

const Template: StoryFn<ImageUploadProps> = (args) => {
  const [file, setFile] = useState<File | null>(null);

  return <ImageUpload {...args} value={file} onImageSelect={(selectedImage) => setFile(selectedImage)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Upload Image",
  className: "image-upload-class"
};

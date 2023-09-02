import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";
import Typography from "@mui/material/Typography";

export interface H1Props {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function H1({ children, sx }: H1Props) {
  return (
    <Typography paddingTop="1.2rem" paddingBottom="1rem" sx={sx} variant="h1">
      {children}
    </Typography>
  );
}

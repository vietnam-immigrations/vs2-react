import { SxProps, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";
import Typography from "@mui/material/Typography";

export interface H2Props {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function H2({ children, sx }: H2Props) {
  const theme = useTheme();
  return (
    <Typography paddingTop="1.2rem" paddingBottom="1rem" sx={sx} color={theme.palette.primary.main} variant="h2">
      {children}
    </Typography>
  );
}

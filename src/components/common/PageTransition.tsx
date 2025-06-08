import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <Box
      sx={{
        animation: "fadeInUp 0.6s ease-out",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}

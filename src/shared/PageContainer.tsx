import { Box, Paper, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
}

export const PageContainer = ({ title, children, actions }: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: { xs: 2, md: 3 },
      }}
    >
      {(title || actions) && (
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {title && (
            <Typography variant="h5" sx={{ color: "var(--text-primary)", fontWeight: 600 }}>
              {title}
            </Typography>
          )}

          {actions}
        </Box>
      )}

      <Paper
        sx={{
          backgroundColor: "var(--dark-bg)",
          border: "1px solid var(--primary-color)",
          borderRadius: 2,
          padding: 2,
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

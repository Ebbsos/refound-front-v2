import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

interface Props {
  page: number;
  rowsPerPage: number;
  total: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
  rowsPerPageOptions?: number[];
}

export const PaginationBar = ({
  page,
  rowsPerPage,
  total,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions = [10, 25, 50, 100],
}: Props) => {
  const totalPages = Math.ceil(total / rowsPerPage);

  const from = total === 0 ? 0 : (page - 1) * rowsPerPage + 1;
  const to = Math.min(page * rowsPerPage, total);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 2,
        mt: 2,
        color: "var(--primary-color)",
      }}
    >
      {/* Filas por página */}
      <Typography sx={{ fontSize: 14 }}>Filas por página</Typography>

      <Select
        size="small"
        value={rowsPerPage}
        onChange={(e) => {
          onRowsPerPageChange(Number(e.target.value));
          onPageChange(1); // reset a página 1
        }}
        sx={{
          color: "var(--primary-color)",
          backgroundColor: "var(--dark-bg)",
          borderColor: "var(--primary-color)",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--primary-color)",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "var(--dark-bg)",
              "& .MuiMenuItem-root": {
                color: "var(--primary-color)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              },
            },
          },
        }}
      >
        {rowsPerPageOptions.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>

      {/* Rango */}
      <Typography sx={{ fontSize: 14 }}>
        {from}-{to} de {total}
      </Typography>

      {/* Navegación */}
      <IconButton
        size="small"
        disabled={page === 1}
        onClick={() => onPageChange(1)}
      >
        <FirstPage />
      </IconButton>

      <IconButton
        size="small"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        size="small"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronRight />
      </IconButton>

      <IconButton
        size="small"
        disabled={page >= totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        <LastPage />
      </IconButton>
    </Box>
  );
};

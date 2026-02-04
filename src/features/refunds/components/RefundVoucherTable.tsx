import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import type { RefundVoucher } from "../../../types/refound";
import { RefundVoucherRow } from "./RefundVoucherRow";

interface Props {
  rows: RefundVoucher[];
  loading?: boolean;
  error: string | null;
}

export const RefundVoucherTable = ({ rows, loading, error }: Props) => {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ textAlign: "center", py: 2 }}>
        {error}
      </Typography>
    );
  }

  if (rows.length === 0) {
    return (
      <Typography sx={{ textAlign: "center", py: 4, color: "#aaa" }}>
        No hay vouchers de devolución
      </Typography>
    );
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={headCell}>ID</TableCell>
          <TableCell sx={headCell}>Cliente</TableCell>
          <TableCell sx={headCell}>Responsable</TableCell>
          <TableCell sx={headCell}>Fecha</TableCell>
          <TableCell sx={headCell}>Expira</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((voucher) => (
          <RefundVoucherRow key={voucher.id_refund} voucher={voucher} />
        ))}
      </TableBody>
    </Table>
  );
};

const headCell = {
  color: "#61eb1b",
  fontWeight: 600,
};

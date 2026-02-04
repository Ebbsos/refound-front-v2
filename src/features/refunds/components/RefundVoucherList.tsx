import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRefundVouchers } from "../hooks/useRefundVouchers";

export const RefundVoucherList = () => {
  const { rows, loading, error } = useRefundVouchers(1, 10);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell style={{ color: "white" }}>ID</TableCell>
          <TableCell style={{ color: "white" }}>Cliente</TableCell>
          <TableCell style={{ color: "white" }}>Responsable</TableCell>
          <TableCell style={{ color: "white" }}>Fecha</TableCell>
          <TableCell style={{ color: "white" }}>Expira</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((v) => (
          <TableRow key={v.id_refund}>
            <TableCell style={{ color: "white" }}>{v.id_refund}</TableCell>
            <TableCell style={{ color: "white" }}> {v.id_customer}</TableCell>
            <TableCell style={{ color: "white" }}>{v.user_responsible}</TableCell>
            <TableCell style={{ color: "white" }}>
              {new Date(v.refund_date).toLocaleString()}
            </TableCell>
            <TableCell style={{ color: "white" }}>
              {new Date(v.expiration_date).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

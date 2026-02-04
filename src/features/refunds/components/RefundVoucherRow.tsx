import { TableCell, TableRow } from "@mui/material";
import type { RefundVoucher } from "../../../types/refound";

interface Props {
  voucher: RefundVoucher;
}

export const RefundVoucherRow = ({ voucher }: Props) => {
  return (
    <TableRow
      hover
      sx={{
        "&:hover": {
          backgroundColor: "rgba(97,235,27,0.08)",
        },
      }}
    >
      <TableCell sx={cell}>{voucher.id_refund}</TableCell>
      <TableCell sx={cell}>{voucher.id_customer}</TableCell>
      <TableCell sx={cell}>{voucher.user_responsible}</TableCell>
      <TableCell sx={cell}>
        {new Date(voucher.refund_date).toLocaleString()}
      </TableCell>
      <TableCell sx={cell}>
        {new Date(voucher.expiration_date).toLocaleDateString()}
      </TableCell>
    </TableRow>
  );
};

const cell = {
  color: "white",
  borderBottom: "1px solid #222",
};

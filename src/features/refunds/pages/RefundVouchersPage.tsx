import { useState } from "react";

import { RefundVoucherTable } from "../components/RefundVoucherTable";
import { useRefundVouchers } from "../hooks/useRefundVouchers";
import { PageContainer } from "../../../shared/PageContainer";
import { PaginationBar } from "../../../shared/pagination/PaginationBar";

export const RefundVouchersPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { rows, count, error } = useRefundVouchers(page, limit);

  return (
    <PageContainer title="Vouchers de devolución">
      <RefundVoucherTable
        rows={rows}
       //oading={loading}
        error={error}
      />

      <PaginationBar
        page={page}
        rowsPerPage={limit}
        total={count}
        onPageChange={setPage}
        onRowsPerPageChange={setLimit}
      />
    </PageContainer>
  );
};

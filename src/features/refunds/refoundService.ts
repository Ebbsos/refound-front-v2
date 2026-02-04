import { httpClient } from "../../services/httpClient";
import type { RefundVoucherResponse } from "../../types/refound";


export const getRefundVouchers = async (
  page = 1,
  limit = 10
): Promise<RefundVoucherResponse> => {
  const { data } = await httpClient.get(
    "/api/resources/refund/voucher",
    {
      params: { page, limit },
    }
  );

  return data;
};

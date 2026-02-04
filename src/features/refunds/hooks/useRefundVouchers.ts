import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchRefundVouchers } from "../refundsSlice";


export const useRefundVouchers = (page = 1, limit = 10) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.refundVouchers);

  useEffect(() => {
    dispatch(fetchRefundVouchers({ page, limit }));
  }, [dispatch, page, limit]);

  return state;
};

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRefundVouchers } from "./refoundService";
import type { RefundVoucher, RefundVoucherResponse } from "../../types/refound";

interface RefundVoucherState {
  rows: RefundVoucher[];
  count: number;
  loading: boolean;
  error: string | null;
}

const initialState: RefundVoucherState = {
  rows: [],
  count: 0,
  loading: false,
  error: null,
};

export const fetchRefundVouchers = createAsyncThunk<
  RefundVoucherResponse,
  { page?: number; limit?: number },
  { rejectValue: string }
>(
  "refunds/fetchRefundVouchers",
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      return await getRefundVouchers(page, limit);
    } catch {
      return rejectWithValue("Error al obtener vouchers de devolución");
    }
  }
);

const refundVouchersSlice = createSlice({
  name: "refundVouchers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRefundVouchers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRefundVouchers.fulfilled, (state, action) => {
        state.loading = false;
        state.rows = action.payload.rows;
        state.count = action.payload.count;
      })
      .addCase(fetchRefundVouchers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Error desconocido";
      });
  },
});

export default refundVouchersSlice.reducer;

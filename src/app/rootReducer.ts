import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import refundVouchersReducer from "../features/refunds/refundsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
   refundVouchers: refundVouchersReducer,
});

export default rootReducer;

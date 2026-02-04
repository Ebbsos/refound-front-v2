export interface Refund {
  id: number;
  sale_id: number;
  reason: string;
  created_at: string;
  total: number;
}

export interface RefundState {
  list: Refund[];
  loading: boolean;
  error: string | null;
}

export interface RefundVoucher {
  id_refund: number;
  refund_date: string;
  id_customer: number;
  user_responsible: string;
  products_id_product: number | null;
  product_price_amount: number;
  refund_type: "Voucher";
  refund_reason: string | null;
  days_after_sale: number;
  expiration_date: string;
}

export interface RefundVoucherResponse {
  count: number;
  rows: RefundVoucher[];
}

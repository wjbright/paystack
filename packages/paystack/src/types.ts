import { z } from "zod";
import { transactionSchema } from "./validations";

export type PaystackTransaction = z.infer<typeof transactionSchema>;

export type PaystackKey = PaystackTransaction["key"];

export interface TransactionInputs {
  email: PaystackTransaction["email"];
  amount: PaystackTransaction["amount"];
}

export interface PaystackSuccessResponse {
  message: string;
  redirecturl: string;
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
}

type PaystackOnSuccess = (args: PaystackSuccessResponse) => any;

export interface TransactionOperations {
  onSuccess: PaystackOnSuccess;
  onCancel: PaystackTransaction["onCancel"];
}

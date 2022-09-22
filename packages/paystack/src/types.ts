import { z } from "zod";
import { transactionSchema } from "./validations";

export type PaystackTransaction = z.infer<typeof transactionSchema>;

export type PaystackKey = PaystackTransaction['key']

export interface TransactionInputs {
    email: PaystackTransaction['email'],
    amount: PaystackTransaction['amount']
}

export interface TransactionOperations {
    onSuccess: PaystackTransaction['onSuccess'],
    onCancel: PaystackTransaction['onCancel']
}
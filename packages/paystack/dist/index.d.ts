/// <reference types="react" />
import * as react from 'react';
import { z } from 'zod';

declare const transactionSchema: z.ZodObject<{
    key: z.ZodType<`pk_test_${string}` | `pk_live_${string}`, z.ZodTypeDef, `pk_test_${string}` | `pk_live_${string}`>;
    email: z.ZodString;
    amount: z.ZodNumber;
    onSuccess: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
    onCancel: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    key: `pk_test_${string}` | `pk_live_${string}`;
    email: string;
    amount: number;
    onSuccess: (args_0: any, ...args_1: unknown[]) => any;
    onCancel: (args_0: any, ...args_1: unknown[]) => any;
}, {
    key: `pk_test_${string}` | `pk_live_${string}`;
    email: string;
    amount: number;
    onSuccess: (args_0: any, ...args_1: unknown[]) => any;
    onCancel: (args_0: any, ...args_1: unknown[]) => any;
}>;

declare type PaystackTransaction = z.infer<typeof transactionSchema>;
declare type PaystackKey = PaystackTransaction['key'];
interface TransactionInputs {
    email: PaystackTransaction['email'];
    amount: PaystackTransaction['amount'];
}
interface TransactionOperations {
    onSuccess: PaystackTransaction['onSuccess'];
    onCancel: PaystackTransaction['onCancel'];
}

declare function usePaystack(key: PaystackKey): {
    setInput: react.Dispatch<react.SetStateAction<TransactionInputs | undefined>>;
    setCallbackMethods: react.Dispatch<react.SetStateAction<TransactionOperations | undefined>>;
    popUp: () => void;
};

export { usePaystack };

import { z } from "zod";
export declare const transactionSchema: z.ZodObject<{
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

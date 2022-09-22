import { z } from "zod";

export const transactionSchema = z.object({
    key: z.custom<`pk_${"test" | "live"}_${string}`>((val) => /pk\_(test|live)\_\w+/g.test(val as string)),
    email: z.string().email(),
    amount: z.number().positive(),
    onSuccess: z.function().args(z.any()).returns(z.any()),
    onCancel: z.function().args(z.any()).returns(z.any())
})

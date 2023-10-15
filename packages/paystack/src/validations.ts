import { z } from "zod";

export const transactionSchema = z.object({
  key: z.string(),
  email: z.string().email(),
  amount: z.number().positive(),
  onSuccess: z.function().args(z.any()).returns(z.any()),
  onCancel: z.function().args(z.any()).returns(z.any()),
});

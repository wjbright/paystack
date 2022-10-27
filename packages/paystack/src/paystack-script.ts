// @ts-ignore
import PaystackPop from "@paystack/inline-js";
import { PaystackTransaction } from "./types";

interface PaystackPopInterface {
  newTransaction: (params: PaystackTransaction) => any;
}

const paystackPop: PaystackPopInterface = new PaystackPop();

export default paystackPop;

import { useState } from "react";
import paystackPop from "./paystack-script";
import { PaystackTransaction, PaystackKey, TransactionInputs, TransactionOperations } from "./types";
import { transactionSchema } from "./validations";

function validateTransaction(transaction: PaystackTransaction) {
    return transactionSchema.parse(transaction)
}

// sometimes you don't know other details apart from the key before hand
// so we shouldn't request everything at once
export default function usePaystack(key: PaystackKey) {
    const [input, setInput] = useState<TransactionInputs>();
    const [callbackMethods, setCallbackMethods] = useState<TransactionOperations>();

    const popUp = () => {
        // let's validate and ensure the write data is being passed to paystack
        const details = {
            ...input,
            ...callbackMethods,
            key,
        } as PaystackTransaction // this is important because typescript expects input and callbackMethods to be undefined since it wasn't declared.
        // we also don't want to declare with dummy data because that can introduce unexpected behaviors and ruin the experience

        const transaction = validateTransaction(details)
        // initialize the core paystack script
        paystackPop.newTransaction(transaction);
    }

    return {setInput, setCallbackMethods, popUp}
}
/// <reference types="react" />
import { PaystackKey, TransactionInputs, TransactionOperations } from "./types";
export default function usePaystack(key: PaystackKey): {
    setInput: import("react").Dispatch<import("react").SetStateAction<TransactionInputs | undefined>>;
    setCallbackMethods: import("react").Dispatch<import("react").SetStateAction<TransactionOperations | undefined>>;
    popUp: () => void;
};

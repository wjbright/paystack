import { PaystackTransaction } from './types';
interface PaystackPopInterface {
    newTransaction: (params: PaystackTransaction) => any;
}
declare const paystackPop: PaystackPopInterface;
export default paystackPop;

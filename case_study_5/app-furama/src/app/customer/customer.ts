import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  customerId?: number;
  customerName?: string;
  dayOfBirth?: string;
  idCard?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerAddress?: string;
  customerType?: {
    id?: number;
    customerTypeName?: string;
  };
}

export interface Customer {
  customerId?: number,
  customerName?: string,
  dayOfBirth?: string,
  idCard?: string,
  customerPhone?: string,
  customerEmail?: string,
  customerAddress?: string,
  customerType?: {
    customerTypeId?: number,
    customerTypeName?: string
  };
}

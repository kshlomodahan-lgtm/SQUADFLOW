export type OrderStatus = 'active' | 'important' | 'frozen' | 'cancelled' | 'frame';
export type CommissionType = 'PCT' | 'FIXED' | 'PER_PRICE' | 'NONE';

export interface ArachimOrderLine {
  orderLineID: number;
  groupNo: number;
  lineNo: number;
  supplierSKU: string;
  customerSKU: string;
  description: string;
  price: number;
  qtyOrdered: number;
  qtyDispatched: number;
  uom: string;
  currency: string;
  discountPct: number;
  lineValue: number;
  commissionType: CommissionType;
  commissionPct: number;
  commissionFixed: number;
  commissionAmount: number;
  deliveryDate: Date | null;
}

export interface ArachimOrderFinancial {
  supplierInvoiceNo: string;
  supplierInvoiceDate: Date | null;
  invoiceAmount: number;
  customerPaid: boolean;
  amountPaidByCustomer: number;
  invoiceIssuedToSupplier: boolean;
  commissionReceived: boolean;
  commissionAmountReceived: number;
  currency: string;
}

export interface ArachimShipment {
  supplierOC: string;
  supplierOCDate: Date | null;
  etd: Date | null;
  eta: Date | null;
  ata: Date | null;
  blNumber: string;
  vesselName: string;
  desiredDeliveryDate: Date | null;
}

export interface ArachimOrder {
  orderID: number;
  orderNumber: number;
  orderYear: number;
  status: OrderStatus;
  supplierID: number;
  supplierShort: string;
  supplierFull: string;
  customerID: number;
  customerShort: string;
  customerFull: string;
  salesDomain: string;
  salesDomainPrefix: string;
  salesPerson: string;
  orderDate: Date;
  deliveryDate: Date | null;
  totalValue: number;
  currency: string;
  commissionType: CommissionType;
  commissionPct: number;
  commissionAmount: number;
  customerRef: string;
  isFrameContract: boolean;
  lines: ArachimOrderLine[];
  financial: ArachimOrderFinancial;
  shipment: ArachimShipment;
}

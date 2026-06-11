import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  GridModule, CellClickEvent, RowClassArgs, PageChangeEvent,
} from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MatIconModule } from '@angular/material/icon';
import { ArachimOrder, ArachimOrderLine, ArachimOrderFinancial, ArachimShipment, OrderStatus, CommissionType } from '../../../core/models/arachim/order.model';
import { OrderDrawerComponent } from './order-drawer/order-drawer.component';

// ── Mock data ────────────────────────────────────────────────────────────────

function line(
  id: number, g: number, l: number,
  sSKU: string, cSKU: string, desc: string,
  price: number, qtyOrd: number, qtyDisp: number, uom: string,
  cur: string, disc: number, val: number,
  cType: CommissionType, cPct: number, cFixed: number, cAmt: number,
  del: Date | null,
): ArachimOrderLine {
  return { orderLineID: id, groupNo: g, lineNo: l, supplierSKU: sSKU, customerSKU: cSKU, description: desc, price, qtyOrdered: qtyOrd, qtyDispatched: qtyDisp, uom, currency: cur, discountPct: disc, lineValue: val, commissionType: cType, commissionPct: cPct, commissionFixed: cFixed, commissionAmount: cAmt, deliveryDate: del };
}

function fin(invNo: string, invDate: Date | null, invAmt: number, custPaid: boolean, custAmt: number, issued: boolean, commRcv: boolean, commAmt: number, cur: string): ArachimOrderFinancial {
  return { supplierInvoiceNo: invNo, supplierInvoiceDate: invDate, invoiceAmount: invAmt, customerPaid: custPaid, amountPaidByCustomer: custAmt, invoiceIssuedToSupplier: issued, commissionReceived: commRcv, commissionAmountReceived: commAmt, currency: cur };
}

function ship(oc: string, ocDate: Date | null, etd: Date | null, eta: Date | null, ata: Date | null, bl: string, vessel: string, desired: Date | null): ArachimShipment {
  return { supplierOC: oc, supplierOCDate: ocDate, etd, eta, ata, blNumber: bl, vesselName: vessel, desiredDeliveryDate: desired };
}

const d = (s: string) => new Date(s);

export const MOCK_ORDERS: ArachimOrder[] = [
  {
    orderID: 1, orderNumber: 42, orderYear: 2024, status: 'important',
    supplierID: 1, supplierShort: 'TEVA', supplierFull: 'טבע תעשיות בע"מ',
    customerID: 1, customerShort: 'שופרסל', customerFull: 'שופרסל בע"מ',
    salesDomain: 'ביוטק', salesDomainPrefix: 'BIO', salesPerson: 'דוד כהן',
    orderDate: d('2024-03-15'), deliveryDate: d('2026-07-20'),
    totalValue: 124500, currency: 'USD', commissionType: 'PCT', commissionPct: 3.5, commissionAmount: 4357,
    customerRef: 'PO-2024-1892', isFrameContract: false,
    lines: [
      line(101, 1, 1, 'TEV-ASP-500', 'SH-12492', 'אספירין 500מג, 100 כמוסות', 18.5, 2000, 800, 'יח', 'USD', 5, 35150, 'PCT', 3.5, 0, 1230, d('2026-07-20')),
      line(102, 1, 2, 'TEV-IBU-400', 'SH-13847', 'איבופרופן 400מג, 50 כמוסות', 22, 1500, 1500, 'יח', 'USD', 0, 33000, 'PCT', 3.5, 0, 1155, d('2026-07-15')),
      line(103, 2, 1, 'TEV-VIT-C1000', 'SH-09912', 'ויטמין C 1000מג, 60 טבליות', 28, 2000, 0, 'יח', 'USD', 3, 54320, 'PCT', 3.5, 0, 1901, d('2026-09-01')),
    ],
    financial: fin('INV-TEVA-2024-0892', d('2024-06-01'), 68150, true, 68150, true, false, 0, 'USD'),
    shipment: ship('OC-2024-0892', d('2024-04-10'), d('2026-06-20'), d('2026-07-10'), d('2026-07-14'), 'MAEU2024-8841', 'MSC ALICE', d('2026-07-20')),
  },
  {
    orderID: 2, orderNumber: 38, orderYear: 2024, status: 'active',
    supplierID: 2, supplierShort: 'OSEM', supplierFull: 'אסם השקעות בע"מ',
    customerID: 2, customerShort: 'רמי לוי', customerFull: 'רמי לוי שיווק השקמה 2006 בע"מ',
    salesDomain: 'מזון', salesDomainPrefix: 'FOOD', salesPerson: 'שרה לוי',
    orderDate: d('2024-04-10'), deliveryDate: d('2026-08-15'),
    totalValue: 28200, currency: 'NIS', commissionType: 'FIXED', commissionPct: 0, commissionAmount: 850,
    customerRef: 'RL-2024-0441', isFrameContract: false,
    lines: [
      line(201, 1, 1, 'OSM-NOODLE-INST', 'RL-8801', 'אטריות מיידיות 75ג, 24 יח', 4.9, 3000, 3000, 'יח', 'NIS', 0, 14700, 'FIXED', 0, 850, 850, d('2026-08-15')),
      line(202, 1, 2, 'OSM-BAMBA-80', 'RL-8820', 'במבה 80ג, 24 שקיות', 5.5, 2000, 1200, 'יח', 'NIS', 5, 10450, 'FIXED', 0, 0, 0, d('2026-08-15')),
    ],
    financial: fin('INV-OSEM-2024-0441', d('2024-08-01'), 25150, true, 25150, true, true, 850, 'NIS'),
    shipment: ship('OC-2024-0441', d('2024-05-01'), d('2026-07-25'), d('2026-08-10'), null, '', '', d('2026-08-15')),
  },
  {
    orderID: 3, orderNumber: 51, orderYear: 2024, status: 'frame',
    supplierID: 3, supplierShort: 'UNILEVER', supplierFull: 'יוניליוור ישראל בע"מ',
    customerID: 3, customerShort: "AM:PM", customerFull: "נפטא ניהול ושיווק בע\"מ (AM:PM)",
    salesDomain: 'צריכה', salesDomainPrefix: 'CONS', salesPerson: 'ינון פרידמן',
    orderDate: d('2024-05-20'), deliveryDate: d('2026-06-30'),
    totalValue: 31000, currency: 'USD', commissionType: 'PCT', commissionPct: 2.5, commissionAmount: 775,
    customerRef: 'AMPM-2024-0718', isFrameContract: true,
    lines: [
      line(301, 1, 1, 'UNL-DOVE-SOAP-100', 'AMPM-5512', 'דאב סבון לחות 100ג, 48 יח', 3.2, 5000, 5000, 'יח', 'USD', 8, 14720, 'PCT', 2.5, 0, 368, d('2026-06-30')),
      line(302, 1, 2, 'UNL-AXE-DEO-150', 'AMPM-5521', 'AXE דאודורנט 150מל, 24 יח', 6.8, 2000, 2000, 'יח', 'USD', 5, 12920, 'PCT', 2.5, 0, 323, d('2026-06-30')),
    ],
    financial: fin('INV-UNL-2024-0718', d('2024-07-15'), 27640, true, 27640, true, true, 775, 'USD'),
    shipment: ship('OC-2024-0718', d('2024-06-01'), d('2026-06-10'), d('2026-06-25'), d('2026-06-28'), 'COSCO2024-4417', 'COSCO FAITH', d('2026-06-30')),
  },
  {
    orderID: 4, orderNumber: 29, orderYear: 2024, status: 'frozen',
    supplierID: 4, supplierShort: 'STRAUSS', supplierFull: 'שטראוס גרופ בע"מ',
    customerID: 1, customerShort: 'שופרסל', customerFull: 'שופרסל בע"מ',
    salesDomain: 'מזון', salesDomainPrefix: 'FOOD', salesPerson: 'דוד כהן',
    orderDate: d('2024-02-08'), deliveryDate: d('2026-09-01'),
    totalValue: 45800, currency: 'NIS', commissionType: 'PCT', commissionPct: 4, commissionAmount: 1832,
    customerRef: 'SH-2024-0299', isFrameContract: false,
    lines: [
      line(401, 1, 1, 'STR-IC-VANILLA-1L', 'SH-22101', 'גלידת וניל 1 ליטר, 12 יח', 24, 800, 0, 'יח', 'NIS', 5, 18240, 'PCT', 4, 0, 729, d('2026-09-01')),
      line(402, 1, 2, 'STR-IC-CHOCO-1L', 'SH-22102', 'גלידת שוקולד 1 ליטר, 12 יח', 25, 1000, 0, 'יח', 'NIS', 5, 23750, 'PCT', 4, 0, 950, d('2026-09-01')),
    ],
    financial: fin('', null, 0, false, 0, false, false, 0, 'NIS'),
    shipment: ship('', null, null, null, null, '', '', d('2026-09-01')),
  },
  {
    orderID: 5, orderNumber: 18, orderYear: 2024, status: 'cancelled',
    supplierID: 5, supplierShort: 'ELITE', supplierFull: 'אליט תעשיות קפה בע"מ',
    customerID: 4, customerShort: 'ביג', customerFull: 'בי.גי.אי מרכזי קניות בע"מ',
    salesDomain: 'משקאות', salesDomainPrefix: 'BEV', salesPerson: 'שרה לוי',
    orderDate: d('2024-01-15'), deliveryDate: d('2026-05-01'),
    totalValue: 12400, currency: 'NIS', commissionType: 'PCT', commissionPct: 3, commissionAmount: 372,
    customerRef: 'BIG-2024-0118', isFrameContract: false,
    lines: [
      line(501, 1, 1, 'ELT-COFFEE-ESP-250', 'BIG-9901', 'קפה טורקי 250ג, 24 יח', 12.5, 1000, 0, 'יח', 'NIS', 0, 12500, 'PCT', 3, 0, 375, null),
    ],
    financial: fin('', null, 0, false, 0, false, false, 0, 'NIS'),
    shipment: ship('', null, null, null, null, '', '', null),
  },
  {
    orderID: 6, orderNumber: 67, orderYear: 2025, status: 'important',
    supplierID: 6, supplierShort: 'TNUVA', supplierFull: 'תנובה מרכז שיתופי לשיווק תוצרת חקלאית בישראל בע"מ',
    customerID: 5, customerShort: 'מגד"א', customerFull: 'מגן דוד אדום',
    salesDomain: 'מזון', salesDomainPrefix: 'FOOD', salesPerson: 'ינון פרידמן',
    orderDate: d('2025-01-20'), deliveryDate: d('2026-07-05'),
    totalValue: 67300, currency: 'USD', commissionType: 'PCT', commissionPct: 2, commissionAmount: 1346,
    customerRef: 'MDA-2025-0067', isFrameContract: false,
    lines: [
      line(601, 1, 1, 'TNV-CHEESE-WHITE-5KG', 'MDA-3301', 'גבינה לבנה 5%, 5 ק"ג', 45, 500, 200, 'יח', 'USD', 3, 21825, 'PCT', 2, 0, 436, d('2026-07-05')),
      line(602, 1, 2, 'TNV-MILK-3PCT-1L', 'MDA-3302', 'חלב 3%, 1 ליטר, 24 יח', 18, 2000, 800, 'יח', 'USD', 0, 36000, 'PCT', 2, 0, 720, d('2026-07-05')),
      line(603, 2, 1, 'TNV-BUTTER-250G', 'MDA-3315', 'חמאה 250ג, 20 יח', 14, 500, 0, 'יח', 'USD', 5, 6650, 'PCT', 2, 0, 133, d('2026-08-01')),
    ],
    financial: fin('INV-TNV-2025-0067', d('2025-02-10'), 57825, false, 0, false, false, 0, 'USD'),
    shipment: ship('OC-2025-0067', d('2025-01-25'), d('2026-06-15'), d('2026-07-01'), null, 'MSCU2025-1167', 'MSC DIANA', d('2026-07-05')),
  },
  {
    orderID: 7, orderNumber: 44, orderYear: 2025, status: 'active',
    supplierID: 7, supplierShort: 'DIPLOMAT', supplierFull: 'דיפלומט מפיצים בע"מ',
    customerID: 1, customerShort: 'שופרסל', customerFull: 'שופרסל בע"מ',
    salesDomain: 'יבוא', salesDomainPrefix: 'IMP', salesPerson: 'דוד כהן',
    orderDate: d('2025-02-14'), deliveryDate: d('2026-05-20'),
    totalValue: 89500, currency: 'NIS', commissionType: 'FIXED', commissionPct: 0, commissionAmount: 1200,
    customerRef: 'SH-2025-1244', isFrameContract: false,
    lines: [
      line(701, 1, 1, 'DPL-WHISKY-12Y-700', 'SH-45001', 'וויסקי 12 שנה 700מל, 6 יח', 280, 200, 200, 'יח', 'NIS', 5, 53200, 'FIXED', 0, 1200, 1200, d('2026-05-20')),
      line(702, 1, 2, 'DPL-GIN-LONDON-700', 'SH-45012', 'ג\'ין לונדון 700מל, 6 יח', 220, 150, 150, 'יח', 'NIS', 5, 31350, 'FIXED', 0, 0, 0, d('2026-05-20')),
    ],
    financial: fin('INV-DPL-2025-1244', d('2025-05-01'), 84550, true, 84550, true, true, 1200, 'NIS'),
    shipment: ship('OC-2025-1244', d('2025-03-01'), d('2026-04-20'), d('2026-05-10'), d('2026-05-18'), 'EVGR2025-7721', 'EVER GIVEN 2', d('2026-05-20')),
  },
  {
    orderID: 8, orderNumber: 55, orderYear: 2025, status: 'active',
    supplierID: 8, supplierShort: 'NESTLE', supplierFull: 'נסטלה ישראל בע"מ',
    customerID: 6, customerShort: 'קרפור', customerFull: 'קרפור ישראל בע"מ',
    salesDomain: 'משקאות', salesDomainPrefix: 'BEV', salesPerson: 'שרה לוי',
    orderDate: d('2025-03-10'), deliveryDate: d('2026-08-10'),
    totalValue: 28000, currency: 'EUR', commissionType: 'PCT', commissionPct: 3.5, commissionAmount: 980,
    customerRef: 'CARF-2025-0855', isFrameContract: false,
    lines: [
      line(801, 1, 1, 'NST-NESPRESSO-RISTRETTO-50', 'CARF-7701', 'קפסולות ריסטרטו 50 יח', 22, 500, 200, 'יח', 'EUR', 5, 10450, 'PCT', 3.5, 0, 365, d('2026-08-10')),
      line(802, 1, 2, 'NST-KITKAT-BULK-5KG', 'CARF-7715', 'קיטקט 5 ק"ג, שקית גדולה', 38, 300, 100, 'יח', 'EUR', 0, 11400, 'PCT', 3.5, 0, 399, d('2026-08-10')),
    ],
    financial: fin('', null, 0, false, 0, false, false, 0, 'EUR'),
    shipment: ship('OC-2025-0855', d('2025-04-05'), d('2026-07-20'), d('2026-08-05'), null, '', '', d('2026-08-10')),
  },
  {
    orderID: 9, orderNumber: 71, orderYear: 2025, status: 'active',
    supplierID: 1, supplierShort: 'TEVA', supplierFull: 'טבע תעשיות בע"מ',
    customerID: 5, customerShort: 'מגד"א', customerFull: 'מגן דוד אדום',
    salesDomain: 'ביוטק', salesDomainPrefix: 'BIO', salesPerson: 'ינון פרידמן',
    orderDate: d('2025-03-28'), deliveryDate: d('2026-06-10'),
    totalValue: 44200, currency: 'USD', commissionType: 'PCT', commissionPct: 3.5, commissionAmount: 1547,
    customerRef: 'MDA-2025-0071', isFrameContract: false,
    lines: [
      line(901, 1, 1, 'TEV-AMOX-500-CAP', 'MDA-8801', 'אמוקסיצילין 500מג, 20 כמוסות', 35, 800, 600, 'יח', 'USD', 0, 28000, 'PCT', 3.5, 0, 980, d('2026-06-10')),
      line(902, 1, 2, 'TEV-METF-1000', 'MDA-8812', 'מטפורמין 1000מג, 60 טבליות', 28, 500, 200, 'יח', 'USD', 5, 13300, 'PCT', 3.5, 0, 465, d('2026-06-10')),
    ],
    financial: fin('INV-TEVA-2025-0071', d('2025-05-20'), 41300, false, 0, false, false, 0, 'USD'),
    shipment: ship('OC-2025-0071', d('2025-04-15'), d('2026-05-20'), d('2026-06-05'), null, 'MAEU2025-3391', 'MSC BEATRICE', d('2026-06-10')),
  },
  {
    orderID: 10, orderNumber: 83, orderYear: 2025, status: 'active',
    supplierID: 9, supplierShort: 'P&G', supplierFull: 'פרוקטר אנד גמבל ישראל בע"מ',
    customerID: 1, customerShort: 'שופרסל', customerFull: 'שופרסל בע"מ',
    salesDomain: 'צריכה', salesDomainPrefix: 'CONS', salesPerson: 'דוד כהן',
    orderDate: d('2025-02-01'), deliveryDate: d('2026-05-15'),
    totalValue: 56000, currency: 'USD', commissionType: 'PCT', commissionPct: 2, commissionAmount: 1120,
    customerRef: 'SH-2025-0883', isFrameContract: false,
    lines: [
      line(1001, 1, 1, 'PG-PAMPERS-M-72', 'SH-30012', 'פמפרס M 72 יח', 68, 300, 300, 'יח', 'USD', 3, 19788, 'PCT', 2, 0, 395, d('2026-05-15')),
      line(1002, 1, 2, 'PG-ARIEL-LIQ-3L', 'SH-30025', 'אריאל נוזלי 3 ליטר', 22, 600, 600, 'יח', 'USD', 5, 12540, 'PCT', 2, 0, 250, d('2026-05-15')),
      line(1003, 2, 1, 'PG-HS-SHAMPOO-400', 'SH-30041', 'הד אנד שולדרס 400מל, 24 יח', 38, 500, 500, 'יח', 'USD', 0, 19000, 'PCT', 2, 0, 380, d('2026-05-15')),
    ],
    financial: fin('INV-PG-2025-0883', d('2025-04-20'), 51328, true, 51328, true, true, 1120, 'USD'),
    shipment: ship('OC-2025-0883', d('2025-02-20'), d('2026-04-25'), d('2026-05-10'), d('2026-05-13'), 'HLCU2025-9981', 'HAPAG COSMOS', d('2026-05-15')),
  },
  {
    orderID: 11, orderNumber: 22, orderYear: 2025, status: 'frozen',
    supplierID: 2, supplierShort: 'OSEM', supplierFull: 'אסם השקעות בע"מ',
    customerID: 5, customerShort: 'מגד"א', customerFull: 'מגן דוד אדום',
    salesDomain: 'מזון', salesDomainPrefix: 'FOOD', salesPerson: 'שרה לוי',
    orderDate: d('2025-01-08'), deliveryDate: d('2026-10-01'),
    totalValue: 18700, currency: 'NIS', commissionType: 'FIXED', commissionPct: 0, commissionAmount: 600,
    customerRef: 'MDA-2025-0022', isFrameContract: false,
    lines: [
      line(1101, 1, 1, 'OSM-CRACKERS-200', 'MDA-6601', 'קרקרים מלוחים 200ג, 24 יח', 8.5, 1200, 0, 'יח', 'NIS', 0, 10200, 'FIXED', 0, 600, 600, d('2026-10-01')),
      line(1102, 1, 2, 'OSM-PRETZELS-250', 'MDA-6612', 'בייגלה 250ג, 12 יח', 7.2, 1000, 0, 'יח', 'NIS', 5, 6840, 'FIXED', 0, 0, 0, d('2026-10-01')),
    ],
    financial: fin('', null, 0, false, 0, false, false, 0, 'NIS'),
    shipment: ship('', null, null, null, null, '', '', d('2026-10-01')),
  },
  {
    orderID: 12, orderNumber: 39, orderYear: 2025, status: 'active',
    supplierID: 4, supplierShort: 'STRAUSS', supplierFull: 'שטראוס גרופ בע"מ',
    customerID: 2, customerShort: 'רמי לוי', customerFull: 'רמי לוי שיווק השקמה 2006 בע"מ',
    salesDomain: 'מזון', salesDomainPrefix: 'FOOD', salesPerson: 'ינון פרידמן',
    orderDate: d('2025-04-01'), deliveryDate: d('2026-07-25'),
    totalValue: 22300, currency: 'NIS', commissionType: 'PCT', commissionPct: 4, commissionAmount: 892,
    customerRef: 'RL-2025-0739', isFrameContract: false,
    lines: [
      line(1201, 1, 1, 'STR-MILKY-CHOCO-200', 'RL-2201', 'מילקי שוקולד 200ג, 20 יח', 9.5, 1200, 1000, 'יח', 'NIS', 5, 10830, 'PCT', 4, 0, 433, d('2026-07-25')),
      line(1202, 1, 2, 'STR-YOPLAIT-STRAW-150', 'RL-2215', 'יוגורט תות 150ג, 24 יח', 8.8, 1000, 400, 'יח', 'NIS', 0, 8800, 'PCT', 4, 0, 352, d('2026-07-25')),
    ],
    financial: fin('', null, 0, false, 0, false, false, 0, 'NIS'),
    shipment: ship('OC-2025-0739', d('2025-04-20'), d('2026-07-05'), d('2026-07-20'), null, '', '', d('2026-07-25')),
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    GridModule, ButtonsModule,
    MatIconModule,
    OrderDrawerComponent,
    DatePipe,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {

  private allOrders = signal<ArachimOrder[]>(MOCK_ORDERS);
  selectedOrder = signal<ArachimOrder | null>(null);

  searchTerm    = '';
  filterSupplier = '';
  filterStatus   = '';
  filterYear     = '';

  gridData: ArachimOrder[] = [];
  sort: SortDescriptor[]   = [{ field: 'orderDate', dir: 'desc' }];
  skip     = 0;
  pageSize = 25;

  // ── KPIs ──────────────────────────────────────────────
  openCount = computed(() =>
    this.allOrders().filter(o => o.status !== 'cancelled').length,
  );

  awaitingShipment = computed(() =>
    this.allOrders().filter(o =>
      (o.status === 'active' || o.status === 'important') && !o.shipment.ata,
    ).length,
  );

  expectedCommission = computed(() =>
    this.allOrders()
      .filter(o => o.status !== 'cancelled')
      .reduce((s, o) => s + o.commissionAmount, 0),
  );

  receivedCommission = computed(() =>
    this.allOrders().reduce((s, o) => s + o.financial.commissionAmountReceived, 0),
  );

  // ── Filter options ────────────────────────────────────
  supplierOptions = computed(() =>
    [...new Set(this.allOrders().map(o => o.supplierShort))].sort(),
  );

  yearOptions = computed(() =>
    [...new Set(this.allOrders().map(o => o.orderYear))].sort((a, b) => b - a),
  );

  // ── Lifecycle ─────────────────────────────────────────
  ngOnInit() { this.applyFilters(); }

  // ── Grid data ─────────────────────────────────────────
  get pagedData() {
    return this.gridData.slice(this.skip, this.skip + this.pageSize);
  }

  applyFilters() {
    let data = this.allOrders();
    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      data = data.filter(o =>
        o.supplierShort.toLowerCase().includes(q) ||
        o.supplierFull.toLowerCase().includes(q)  ||
        o.customerShort.toLowerCase().includes(q) ||
        o.customerFull.toLowerCase().includes(q)  ||
        o.orderNumber.toString().includes(q)       ||
        o.customerRef.toLowerCase().includes(q),
      );
    }
    if (this.filterSupplier) data = data.filter(o => o.supplierShort === this.filterSupplier);
    if (this.filterStatus)   data = data.filter(o => o.status === this.filterStatus);
    if (this.filterYear)     data = data.filter(o => o.orderYear === +this.filterYear);

    this.gridData = orderBy(data, this.sort) as ArachimOrder[];
    this.skip = 0;
  }

  onSearch(v: string)                { this.searchTerm = v;  this.applyFilters(); }
  onFilterChange()                   { this.applyFilters(); }
  onSortChange(s: SortDescriptor[])  { this.sort = s;        this.applyFilters(); }
  onPageChange(e: PageChangeEvent)   { this.skip = e.skip;   this.pageSize = e.take; }
  clearFilters()                     { this.searchTerm = ''; this.filterSupplier = ''; this.filterStatus = ''; this.filterYear = ''; this.applyFilters(); }

  // ── Drawer ────────────────────────────────────────────
  onCellClick(e: CellClickEvent) {
    const target = e.originalEvent?.target as HTMLElement;
    if (target?.closest('.k-checkbox-wrap, .grid-act-btn')) return;
    this.selectedOrder.set(e.dataItem as ArachimOrder);
  }

  closeDrawer() { this.selectedOrder.set(null); }

  // ── Display helpers ───────────────────────────────────
  readonly statusLabels: Record<OrderStatus, string> = {
    active: 'פעיל', important: 'חשוב', frozen: 'מוקפא',
    cancelled: 'בוטל', frame: 'מסגרת',
  };

  statusLabel(s: OrderStatus) { return this.statusLabels[s]; }

  commBadge(o: ArachimOrder): string {
    if (o.commissionType === 'PCT')       return `${o.commissionPct}%`;
    if (o.commissionType === 'FIXED')     return 'קבוע';
    if (o.commissionType === 'PER_PRICE') return '×מ"מ';
    return '—';
  }

  dateClass(d: Date | null): string {
    if (!d) return '';
    const days = Math.ceil((d.getTime() - Date.now()) / 86400000);
    if (days < 0)  return 'date-overdue';
    if (days < 30) return 'date-soon';
    return '';
  }

  orderBadge(o: ArachimOrder): string {
    return `${o.orderYear}-${o.orderNumber.toString().padStart(3, '0')}`;
  }

  rowClass = (ctx: RowClassArgs): Record<string, boolean> => {
    const o = ctx.dataItem as ArachimOrder;
    return {
      'row-cancelled':  o.status === 'cancelled',
      'row-important':  o.status === 'important',
      'row-frozen':     o.status === 'frozen',
      'row-selected':   this.selectedOrder()?.orderID === o.orderID,
    };
  };

  hasActiveFilters(): boolean {
    return !!(this.searchTerm || this.filterSupplier || this.filterStatus || this.filterYear);
  }
}

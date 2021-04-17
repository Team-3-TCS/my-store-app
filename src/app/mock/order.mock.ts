import { Order } from '../core/models/order.models';

export const order: Order[] = [
  {
    idPurchase:1,
    idClient:1,
    idSeller:1,
    idStatusPurchase:0,
    idStatusPayment:1,
    deliveryTipe:0,
    discount:10.0,
  },
  {
    idPurchase:2,
    idClient:2,
    idSeller:1,
    idStatusPurchase:0,
    idStatusPayment:1,
    deliveryTipe:0,
    discount:15.0,
  },
  {
    idPurchase:3,
    idClient:1,
    idSeller:1,
    idStatusPurchase:1,
    idStatusPayment:1,
    deliveryTipe:0,
    discount:20.0,
  },
];

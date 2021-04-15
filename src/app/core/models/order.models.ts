export interface Order {
    idPurchase?: number;
    idClient?: number;
    idSeller?: number;
    date?: Date;
    idStatusPurchase?: number;       // 0: PENDIENTE // 1: ENTREGADO
    idStatusPayment?:Number;
    deliveryTipe?:number;
    discount?:number;
  }
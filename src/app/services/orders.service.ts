import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Order} from '../core/models/order.models';
import { order } from '../mock/order.mock';

@Injectable({
    providedIn: 'root',
  })
  export class OrdersService {
    private orders: Order[] = order;
    private ordersStatus: Order[] = [];
    constructor() {
    }
  
    getOrders() {
      return this.orders;
    }

    getOrdersStatus(idStatusPurchase:number){
      // 0: PENDIENTE
      // 1: ENTREGADO
      this.ordersStatus = [];
      let i = 0;
      for(let order of this.orders){
        if(order.idStatusPurchase == idStatusPurchase){
          this.ordersStatus[i] = order;
          i++;
        }
      }
      return this.ordersStatus;
    }
  
    getOrder(i: string) {
      return this.orders[i];
    }
    getOrderEdit(i: number) {
      i = i - 1;
      return this.orders[i];
    }
  
    addProduct(order: Order) {
      this.orders.push(order);
    }
    editProduct(order: Order, i: number) {
      this.orders[i - 1].idPurchase = order.idPurchase;
      this.orders[i - 1].idClient = order.idClient;
      this.orders[i - 1].idSeller = order.idSeller;
      this.orders[i - 1].idStatusPurchase = order.idStatusPurchase;
      this.orders[i - 1].idStatusPayment = order.idStatusPayment;
      this.orders[i - 1].deliveryTipe = order.deliveryTipe;
      this.orders[i - 1].discount = order.discount;
    }
  }
  
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public whish= new BehaviorSubject<Producto[]>([]);
  public currentDataCart$=this.whish.asObservable();
 
  constructor() { }
  public changeWishlist(newData: Producto) {
    //Obtenemos el valor actual
     let listCart = this.whish.getValue();
    //Si no es el primer item del carrito
    if(listCart)
    {
      //Buscamos si ya cargamos ese item en el carrito
      let objIndex = listCart.findIndex((obj => obj.id == newData.id));
      //Si ya cargamos uno aumentamos su cantidad
      if(objIndex != -1)
      {
        listCart[objIndex].stock += 1;
      }
      //Si es el primer item de ese tipo lo agregamos derecho al carrito
      else {
        listCart.push(newData);
      }  
      localStorage.setItem('listaDeseos',JSON.stringify(listCart));
    }
    //Si es el primer elemento lo inicializamos
    else {
      listCart = [];
      listCart.push(newData);
      localStorage.setItem('listaDeseos',JSON.stringify(listCart));
    }
    this.whish.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  }
  public removeElementWhishlist(newData:Producto){
    //Obtenemos el valor actual de carrito
    let listCart = this.whish.getValue();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj => obj.id == newData.id));
    if(objIndex != -1)
    {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].stock = 1;
      //Eliminamos el item del array del carrito
      listCart.splice(objIndex,1);
    }
    
    this.whish.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    localStorage.setItem('listaDeseos',JSON.stringify(listCart));
  }
}

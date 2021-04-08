import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/models/producto.models';
import { NgxSpinnerService } from "ngx-spinner";
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  cartData: Producto[];
  cartTotal: Number;
  showSpinner: Boolean;
  checkoutForm: any;
  constructor(private cartService: CartService,
   
    private router: Router,
    private  spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }
  onCheckout() {
    this.spinner.show().then(p => {
      
    });
  }
}

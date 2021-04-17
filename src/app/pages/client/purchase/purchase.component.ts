import { Component, OnInit } from '@angular/core';


import { Producto } from 'src/app/core/models/producto.models';


import { NgxSpinnerService } from "ngx-spinner";
import { CartService } from 'src/app/core/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  productos: Producto[];
  total: number = 0
  registerForm: FormGroup;
  submitted = false;
  departamento: any[] = ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cuzco", "Huancavelica	", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque	", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes"];
  constructor(private cartService: CartService, private fb: FormBuilder, private spinner: NgxSpinnerService,
  ) {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern(/[0-9]{8}$/),Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{3,}))$/)]],
      phone: ['', [Validators.required, Validators.pattern(/[0-9]{9}$/),Validators.maxLength(9)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.getData();
    this.monto(this.total);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  onSubmit() {
    this.submitted = true;
    //parar el formulario en caso se invalido los input
    if (this.registerForm.invalid) {
      return;
    }
  }
  get form() {
    return this.registerForm.controls;
  }
  onReset() {//limpiar los input
    this.submitted = false;
    this.registerForm.reset();
  }
  monto(valor) {
    this.cartService.monto(valor);
  }
  getData() {//Recibimos informacion del LocalStorage
    let getCartDetails
    if (localStorage.getItem('list')) {
      this.productos = JSON.parse(localStorage.getItem('list'));
      if (localStorage.getItem('list')) {
        getCartDetails = JSON.parse(localStorage.getItem('list'))
        this.total = getCartDetails.reduce(function (acc, val) {
          return acc + (val.precio * val.cantidad)
        }, 0)
      }
    }
  }
}

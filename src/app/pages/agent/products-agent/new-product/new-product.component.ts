import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/core/models/producto.models';
import { ProductsAgentComponent } from 'src/app/pages/agent/products-agent/products-agent.component';
import { ProductsService } from 'src/app/services/products.service';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-products',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  product: Producto;
  edit = ProductsAgentComponent.edit;

  products: Producto[] = [];

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.product = this.productsService.getProduct(params['id']);
    });
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  categories: Category[] = [
    { value: 'c-0', viewValue: 'Shoes' },
    { value: 'c-1', viewValue: 'Pants' },
    { value: 'c-2', viewValue: 'Shirt' },
  ];

  selectedProduct: Producto = {
    nombre: null,
    descripcion: null,
    precio: null,
    stock: null,
  };

  addOrEditProduct() {
    if (!this.edit) {
      this.selectedProduct.id = this.products.length + 1;
      this.selectedProduct.id_categoria = 11;
      this.productsService.addProduct(this.selectedProduct);
      this.selectedProduct = {
        nombre: null,
        descripcion: null,
        precio: null,
        stock: null,
      };
      ProductsAgentComponent.edit = false;
    } else {
      this.selectedProduct = {
        nombre: null,
        descripcion: null,
        precio: null,
        stock: null,
      };
    }
  }
}

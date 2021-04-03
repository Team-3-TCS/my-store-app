import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { producto } from 'src/app/models/producto.models';
import { ProductsAgentComponent } from 'src/app/pages/agent/products-agent/products-agent.component';
import { ProductsService } from 'src/app/services/products.service';
interface Category{
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-edit-produtc',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class EditProductComponent implements OnInit {
  
    product:producto;
    edit = ProductsAgentComponent.edit;
    id = ProductsAgentComponent.id ;
    products:producto[]=[];
    selectedProduct: producto = {
        nombre: null,
        descripcion: null,
        precio: null,
        stock: null
      }
  
      constructor(private productsService:ProductsService, private activatedRoute : ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
          this.product = this.productsService.getProductEdit(params['id']);
        })
       }
  
    ngOnInit(): void {
        
      this.products = this.productsService.getProducts();
      console.log(this.edit);
      console.log(this.product);
      this.selectedProduct.nombre=this.product.nombre;
      this.selectedProduct.descripcion=this.product.descripcion;
      this.selectedProduct.precio=this.product.precio;
      this.selectedProduct.stock=this.product.stock;
      console.log(this.selectedProduct);
    }
  
    categories: Category[] = [
      { value: 'c-0', viewValue: 'Shoes'},
      { value: 'c-1', viewValue: 'Pants'},
      { value: 'c-2', viewValue: 'Shirt'}
    ]
  
    

    addOrEditProduct(){
        if(!this.edit){
            this.selectedProduct.id = this.products.length + 1
            this.selectedProduct.idCategoria = 11;
            this.productsService.addProduct(this.selectedProduct);
            this.selectedProduct={
              nombre: null,
              descripcion: null,
              precio: null,
              stock: null    
            }
            ProductsAgentComponent.edit=false;
          }else{
            this.productsService.editProduct(this.selectedProduct,this.id);
          }
      }

    


}
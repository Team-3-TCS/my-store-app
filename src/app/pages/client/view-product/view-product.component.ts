import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/core/models/producto.models';
import { ProductosService } from 'src/app/core/services/productos.service';
declare let $: any;
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements AfterViewInit, OnInit {
  id: number;
  product;
  prod:Producto;
  thumbimages: any[] = [];
 
  
  constructor(private productosService:ProductosService,
    private route:ActivatedRoute) { 
      
    }

  ngOnInit(): void {
     this.id= parseInt(this.route.snapshot.paramMap.get('id'));
     this.prod=this.productosService.getProduct(this.id);
     console.log(this.prod);
  }
  ngAfterViewInit(): void {

    // Product Main img Slick
    $('#product-main-img').slick({
      infinite: true,
      speed: 300,
      dots: false,
      arrows: true,
      fade: true,
      asNavFor: '#product-imgs',
    });

    // Product imgs Slick
    $('#product-imgs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      vertical: true,
      asNavFor: '#product-main-img',
      responsive: [{
        breakpoint: 991,
        settings: {
          vertical: false,
          arrows: false,
          dots: true,
        }
      },
      ]
    });

    // Product img zoom
    var zoomMainProduct = document.getElementById('product-main-img');
    if (zoomMainProduct) {
      $('#product-main-img .product-preview').zoom();
    }
  }
  
}

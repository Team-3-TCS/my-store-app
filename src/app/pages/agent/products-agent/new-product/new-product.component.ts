import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  categories: Category[] = [
    { value: 'c-0', viewValue: 'Shoes' },
    { value: 'c-1', viewValue: 'Pants' },
    { value: 'c-2', viewValue: 'Shirt' },
  ];
}

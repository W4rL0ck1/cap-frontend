import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [
    {
      name: 'Produto 1',
      description: 'Descrição do Produto 1',
      price: 19.99,
      imageUrl: 'https://picsum.photos/300/200'
    },
    {
      name: 'Produto 2',
      description: 'Descrição do Produto 2',
      price: 29.99,
      imageUrl: 'https://picsum.photos/300/201'
    },
    {
      name: 'Produto 3',
      description: 'Descrição do Produto 3',
      price: 39.99,
      imageUrl: 'https://picsum.photos/301/200'
    },
    {
      name: 'Produto 4',
      description: 'Descrição do Produto 4',
      price: 19.99,
      imageUrl: 'https://picsum.photos/302/200'
    },
    {
      name: 'Produto 5',
      description: 'Descrição do Produto 5',
      price: 29.99,
      imageUrl: 'https://picsum.photos/302/201'
    },
    {
      name: 'Product 6',
      description: 'Descrição do Product 6',
      price: 39.99,
      imageUrl: 'https://picsum.photos/303/200'
    },
    // Add more products as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

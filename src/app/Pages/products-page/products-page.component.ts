import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.Service';
import { Product } from '../../Models/products.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public products: Product[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllProducts().subscribe(
      async (data: any) => {
        console.log("🚀 ~ ProductPageComponent ~ data:", data.result.$values)
        this.products = data.result.$values;
        console.log("🚀 ~ ProductPageComponent ~ products2:", this.products)
      },
    );
  }
}

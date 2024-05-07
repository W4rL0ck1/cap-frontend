import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.Service';
import { Product } from '../../Models/products.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public products2: Product[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllProducts().subscribe(
      async (data: any) => {
        console.log("🚀 ~ ProductPageComponent ~ data:", data.result.$values)
        this.products2 = data.result.$values;
        console.log("🚀 ~ ProductPageComponent ~ products2:", this.products2)
      },
    );
  }
    cutString(str: string) {
      // Check if the string length exceeds 50 characters
      if (str.length > 42) {
          // Cut the string to 47 characters
          return str.substring(0, 40) + "...";
      }
      // Return the original string if it doesn't exceed 50 characters
      return str;
    }
}

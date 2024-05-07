import { Component, Input } from '@angular/core';
import { Product } from '../../Models/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() products: Product[] = [];

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

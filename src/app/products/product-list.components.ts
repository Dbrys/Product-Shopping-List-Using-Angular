import {Component, OnInit} from '@angular/core'; 
import { IProduct } from './product';


@Component({
  selector: 'pm-productList',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string; 
  //Use get and set for getting user input and setting it
  get listFilter(): string {
    return this._listFilter;
  }; 
  set listFilter(value: string) {
      this._listFilter = value; 
      this.filteredProducts = this.listFilter ? this.filterSearch(this.listFilter) : this.products;
  }

  onRatingClicked(message: string): void {

    this.pageTitle = message; 
  }


  filteredProducts: IProduct[]; 
  products: IProduct[] = [{
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  },{
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
  }]; 
  // constructor initialized each time the component is initalized 
  constructor() {
     this.filteredProducts = this.products;
     this._listFilter = '';
  }


  // On click if show image is false it equals true and if clicked on true it equals false
  toggleImage(): void
  {
    this.showImage = !this.showImage;

  }

  ngOnInit(): void 
  {
    console.log('In OnInit');
  }
 // filter method used to filter products based on user input 
  filterSearch(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase(); // Takes in user input and puts it all lowercase
    return this.products.filter((product: IProduct) => //calls filter on products array and returns a IProducts array where the product name is the string passed in
                product.productName.toLocaleLowerCase().indexOf(filterBy) != -1); 
  }

    
 
    
}
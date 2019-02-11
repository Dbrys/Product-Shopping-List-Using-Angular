import {Component, OnInit} from '@angular/core'; 
import { IProduct } from './product';
import { ProductService } from './product.service';


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
  errorMessage: string; 
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
  products: IProduct[] = []; 
  // constructor initialized each time the component is initalized 
  constructor(private productService: ProductService) {
    
  }


  // On click if show image is false it equals true and if clicked on true it equals false
  toggleImage(): void
  {
    this.showImage = !this.showImage;

  }

  ngOnInit(): void 
  {
   this.productService.getProducts().subscribe(
    products =>{ 
      this.products = products,
      this.filteredProducts = this.products 
    },
    error => this.errorMessage = <any>error
    );
    this.filteredProducts =this.products; 

  }
 // filter method used to filter products based on user input 
  filterSearch(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase(); // Takes in user input and puts it all lowercase
    return this.products.filter((product: IProduct) => //calls filter on products array and returns a IProducts array where the product name is the string passed in
                product.productName.toLocaleLowerCase().indexOf(filterBy) != -1); 
  }

    
 
    
}
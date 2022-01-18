import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';




@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProsucts();

    const productObservable = this.productService.getProducts();
    productObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (err) => { console.error('something wrong occurred: ' + err);}
    )
    // const observable = new Observable(subscriber => {
    //   subscriber.next('aho');
    //   subscriber.next('boke');
    //   subscriber.next ('kasu');
    //   setTimeout(() => {
    //     subscriber.next('sine');
    //     subscriber.complete();
    //   }, 3000);
    // });


    // console.log('just before subscribe');

    //  observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });

    // console.log('just after subscribe');

  }

}

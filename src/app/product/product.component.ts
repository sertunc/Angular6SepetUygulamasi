import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router'

import { Product } from './product';
import { ProductService } from './product.service'
import { CartService } from '../cart/cart.service'

import { NotificationsService } from 'angular2-notifications';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  product: Product;
  products: Product[];
  productAddForm: FormGroup;
  filterText: string;

  createProductForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private notificationService: NotificationsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(x => {
      this.getProducts(x["seoUrl"]);
    });

    //let id = this.activatedRoute.snapshot.paramMap.get('seoUrl'); //sadece sayfa ilk açılınca çalışıyor

    //this.createProductForm();
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
    }
  }

  getProducts(seoLink: string) {
    this.productService.getProducts(seoLink).subscribe(res => {
      this.products = res
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.notificationService.success(product.productName);
  }
}

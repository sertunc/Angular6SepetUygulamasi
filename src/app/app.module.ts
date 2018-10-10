import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CetegoryComponent } from './cetegory/cetegory.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartService } from './cart/cart.service'

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';

const appRoutes: Routes = [
  { path: "products", component: ProductComponent },
  { path: "products/:seoUrl", component: ProductComponent },
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "my-cart", component: CartComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CetegoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(appRoutes, { enableTracing: true }),
    RouterModule.forRoot(appRoutes),
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    { provide: "apiUrl", useValue: "http://northwindapi.azurewebsites.net/api" },
    NotificationsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { CartItem } from './cart-items';
import { Product } from '../product/product';
import { CART_ITEMS_LIST } from './cart-item-list';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class CartService {

  cartItems: CartItem[];

  constructor() { }

  addToCart(product: Product) {
    var addedItem = CART_ITEMS_LIST.find(x => x.product.productId == product.productId);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      let newCardItem = new CartItem();
      newCardItem.product = product;
      newCardItem.quantity = 1;
      CART_ITEMS_LIST.push(newCardItem);
    }
  }

  list(): CartItem[] {
    return CART_ITEMS_LIST;
  }

  clear() {
    CART_ITEMS_LIST.splice(0, CART_ITEMS_LIST.length);
  }

  removeFromCart(product: Product) {
    var removedCartItem = CART_ITEMS_LIST.find(x => x.product.productId == product.productId);
    var indexNo = CART_ITEMS_LIST.indexOf(removedCartItem);
    if (indexNo != 1) {
      CART_ITEMS_LIST.splice(indexNo, 1)
    }
  }

}

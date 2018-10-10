import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

// @Injectable({
//   providedIn: 'root'
// })
//bu kısım tüm uygulamada instance alır

@Injectable()
export class ProductService {

  constructor(
    private http: Http,
    @Inject('apiUrl') private apiUrl) { }

  getProducts(seoLink: string): Observable<Product[]> {
    if (seoLink) {
      return this.http.get(this.apiUrl + "/products/" + seoLink)
        .pipe(map(r => r.json()));
    }
    else {
      return this.http.get(this.apiUrl + "/products")
        .pipe(map(r => r.json()));
    }
  }
}

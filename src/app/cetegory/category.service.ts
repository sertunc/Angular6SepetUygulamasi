import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './category';

// @Injectable({
//   providedIn: 'root'
// })
//bu kısım tüm uygulamada instance alır

@Injectable()
export class CategoryService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }

  getCategories(): Observable<Category[]> {
    return this.http.get(this.apiUrl + "/categories").pipe(map(res => res.json()));
  }
}

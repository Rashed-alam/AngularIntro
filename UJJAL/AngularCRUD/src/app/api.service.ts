import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';
import { Observable, of } from 'rxjs';

//declaring http header cosntant
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/products";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  
  // Error handling section 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  ////////////////////////////////////////////////////////////////////

  //CRUD operations

  //get all products using get methods
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  
  // get individual products using get methods passing product id
  getProduct(id: number): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }
  
  // add new product using post method
  addProduct (product): Observable<Product> {
    return this.http.post<Product>(apiUrl, product, httpOptions).pipe(
      tap((product: Product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }
  
  // update product using put method
  updateProduct (id, product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  // delete selected product using delete method
  deleteProduct (id): Observable<Product> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }


}

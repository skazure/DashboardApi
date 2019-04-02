import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { IProduct } from './products';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl =  "http://webapi.localhost.net/api/Users"; //"http://localhost:59730/api/Users";   //"api/products/products.json"
  private productUpdateUrl = "http://webapi.localhost.net/api/Users";

 
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {

    return this.http.get<IProduct[]>(this.productUrl).pipe(
    tap (data => console.log('All products: ' + JSON.stringify(data))),
    catchError(this.handleError)); 

  }

  createProduct(product: IProduct): Observable<IProduct> {  
    console.log("Inside product create service");
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.post<IProduct>(this.productUpdateUrl + '/', product, httpOptions);
}


  private handleError(err: HttpErrorResponse){

    let errorMessage = '';
    if (err.error instanceof ErrorEvent){

      errorMessage = `An error occured: ${err.error.message}`;
      
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);

    return throwError(errorMessage);
  }

  
}

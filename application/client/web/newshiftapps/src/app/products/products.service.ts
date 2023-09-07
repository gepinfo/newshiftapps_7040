import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllproductsValues(data:any){

    return this.http.post(`${this.BaseURL}/products`,data);
  }

  GetAllproductsValues(){
    return this.http.get(`${this.BaseURL}/products`);
  }
  GetAllmodulesValues(){
    return this.http.get(`${this.BaseURL}/modules`);
  }

  Updateproducts(data:any){
    return this.http.put(`${this.BaseURL}/products/${data.id}`,data);
  }

  getSpecificproducts(id:number){
    return this.http.get(`${this.BaseURL}/products/${id}`);
  }

  getSpecificproductsHistory(id:number){
    return this.http.get(`${this.BaseURL}/products/${id}/history?days=30`);
  }

  DeleteproductsValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/products`,dataId);
  }

  GetNounById(productsId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/productsid/` + productsId);
  }

  Searchproducts(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/products/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}
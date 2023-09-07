import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ModulesService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllmodulesValues(data:any){

    return this.http.post(`${this.BaseURL}/modules`,data);
  }

  GetAllmodulesValues(){
    return this.http.get(`${this.BaseURL}/modules`);
  }

  Updatemodules(data:any){
    return this.http.put(`${this.BaseURL}/modules/${data.id}`,data);
  }

  getSpecificmodules(id:number){
    return this.http.get(`${this.BaseURL}/modules/${id}`);
  }

  getSpecificmodulesHistory(id:number){
    return this.http.get(`${this.BaseURL}/modules/${id}/history?days=30`);
  }

  DeletemodulesValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/modules`,dataId);
  }

  GetNounById(modulesId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/modulesid/` + modulesId);
  }

  Searchmodules(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/modules/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}
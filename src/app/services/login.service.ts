import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  //Esta sería la llamada para chequear que no es un cliente todavía
  checkNewCustomer(customer:any){
    return this.http.get('assets/server/login.txt');
  }
   
  //Aquí iría la función que haría un POST en la bases de datos 
  // y agregaría el nuevo cliente
  newCustomer(customer:any){
    console.log("New customer Added");
    return this.http.get('assets/server/join.txt');
  }

}

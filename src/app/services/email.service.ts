import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private sendEmailBaseUrl:string ="http://localhost:8282";

  constructor(private httpClient:HttpClient) { }

  sendEmail(data:any){
    return this.httpClient.post(this.sendEmailBaseUrl+'/sendemail',data);
   }
  
}

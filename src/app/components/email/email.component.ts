import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

   data = {
     to:"",
     subject:"",
     message:""
   }

   flag:boolean = false;
   
  constructor(private emailService:EmailService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  sendEmail(){
    if(this.data.to=='' ||this.data.subject=='' || this.data.message==''){
      this.snackBar.open("fields can not be empty","Ok");
      return;
    }

    this.flag = true;

    this.emailService.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
        this.flag = false;
        this.snackBar.open("Email Sent Successfully","ok");
      },error=>{
        console.log(error);
        this.flag = false;
        this.snackBar.open("Service failed due to some problem","ok");
      });
  }

}

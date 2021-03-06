import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'udemy-angular-course';

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) {}

  ngOnInit() {
    this.showSuccess();
    this.showSpinner();
  }

  showSuccess() {
    this.toastr.success('Angular Projesine Hoşgeldiniz!', 'Giriş Başarılı!'); 
    //çeşitli toast bildirimleri. success, warning, error vs. gibi
  }

  showSpinner() {
    this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 3 seconds */
        this.spinner.hide();
      }, 3000);
  }

}

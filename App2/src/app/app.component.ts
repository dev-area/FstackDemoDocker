import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App2';
  num:number = 10;
  name:string = "eli";
  num1:number=0;
  t1:string = "";
  t2:string = "";

  constructor(private http: HttpClient) { }

  f1(){
    this.num1++;
  }

  f2(){
    this.http.get("http://localhost/api/samp1").subscribe(data => {
      this.t1 = data.toString();
  })
  }

  f3(){
    this.http.get("http://localhost/api2/samp2").subscribe(data => {
      this.t2 = data.toString();
  })
  }
}

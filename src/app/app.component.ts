import { Component } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _cookieService:CookieService){}

  getall(key: string){
       return this._cookieService.get(key);
   }

  getCookie(key: string){
    return this._cookieService.get(key);
  }

  prueba(){

    this._cookieService.putObject("Go!",{"token":"pepita2"});
    this._cookieService.put("Go2!","pepita2");
    console.log(this._cookieService.get("Go2!"))
console.log(this._cookieService.getAll());
console.log(this._cookieService.getObject("Go!"));

  }

  title = 'app works!';

}

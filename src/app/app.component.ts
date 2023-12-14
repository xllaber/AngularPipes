import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Nightblood";
  myName: string = "xiMO LlÀcEr beRnaBEu"
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  percentage: number = 0.234;
  salary: number = 1234.56;
  date: Date = new Date();
  lang: string = "es";
  video: string = "https://www.youtube.com/embed/aBxLgW9lE64";
  active: boolean = true;
  hero = {
    name: "Kaladin",
    key: "Stormblessed",
    age: 21,
    address: {
      country: "Urithiru",
      floor: 20,
      door: 1
    }
  }
  promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Recieved");
    }, 4500)
  })
}

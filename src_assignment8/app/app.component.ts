import { Component } from '@angular/core';
//inline css and html to give colour to textfield and header
@Component({
  selector: 'app-root',
  template:`
        <div style=text-align:center>
        <h1>Marvellous Infosystems</h1>
  <h2>Educating for better tommorow</h2>
  <input type="text">
  </div>
  ` ,
  styles: [`h1{
    color:red;
  }
  h2{
    color:pink
  }

  input[type=text]
  {
    background-color:lightblue;
  }
  `]
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}

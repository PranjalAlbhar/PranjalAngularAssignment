import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignemt';
  name='Marvellous Infosystems';
  public fun()
  {
    this.name='Button Clicked';

  }
}
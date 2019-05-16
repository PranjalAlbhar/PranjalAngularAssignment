import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignemt';

  public data;

  public mydata;
  public parentToChild()
  {
    this.data="Hello From parent";

  }

}



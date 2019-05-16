import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignemt';
  public data=[];
  public constructor(public student:StudentService)
  {

  }
  public details()
  {

      this.student.sendData().subscribe(data=>this.data=data);
  }
}

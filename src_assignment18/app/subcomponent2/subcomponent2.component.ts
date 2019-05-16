import { Component, OnInit } from '@angular/core';
import { BookInfoService } from '../book-info.service';

@Component({
  selector: 'app-subcomponent2',
  templateUrl: './subcomponent2.component.html',
  styleUrls: ['./subcomponent2.component.css']
})
export class Subcomponent2Component implements OnInit {
public details=[];

  constructor(public service:BookInfoService) { }

  ngOnInit() {
      this.service.getDetail().subscribe(data=>this.details=data);
  }

}

import { Component, OnInit } from '@angular/core';
import { BookInfoService } from '../book-info.service';

@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {

  public data=[];

  constructor(public service: BookInfoService) { }

  ngOnInit() {
      this.service.getDetail().subscribe(data=>this.data=data);

  }


}

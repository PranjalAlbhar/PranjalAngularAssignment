import { Component, OnInit } from '@angular/core';
import { BookInfoService } from '../book-info.service';

@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit {

    public details=[];
  constructor(public service:BookInfoService) { }

  ngOnInit() {
    this.service.getDetail().subscribe(data=>this.details=data);
  }

}

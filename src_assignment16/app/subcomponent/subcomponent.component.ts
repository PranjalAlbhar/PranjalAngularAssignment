import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit {

  @Input() public ParentData;
 
  @Output() public childEvent=new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  public childToParentData()
  {
    this.childEvent.emit("Data From Child to Parent");

  }
  
}

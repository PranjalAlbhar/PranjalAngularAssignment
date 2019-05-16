import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsNameComponent } from './os-name.component';

describe('OsNameComponent', () => {
  let component: OsNameComponent;
  let fixture: ComponentFixture<OsNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

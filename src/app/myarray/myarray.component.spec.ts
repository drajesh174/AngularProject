import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyarrayComponent } from './myarray.component';

describe('MyarrayComponent', () => {
  let component: MyarrayComponent;
  let fixture: ComponentFixture<MyarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

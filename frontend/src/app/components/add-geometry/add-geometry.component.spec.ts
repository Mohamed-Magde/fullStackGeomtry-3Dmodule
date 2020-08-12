import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeometryComponent } from './add-geometry.component';

describe('AddGeometryComponent', () => {
  let component: AddGeometryComponent;
  let fixture: ComponentFixture<AddGeometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

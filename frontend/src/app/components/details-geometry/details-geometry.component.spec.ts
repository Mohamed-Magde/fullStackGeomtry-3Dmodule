import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGeometryComponent } from './details-geometry.component';

describe('DetailsGeometryComponent', () => {
  let component: DetailsGeometryComponent;
  let fixture: ComponentFixture<DetailsGeometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsGeometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

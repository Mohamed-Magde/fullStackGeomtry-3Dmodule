import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGeometryComponent } from './list-geometry.component';

describe('ListGeometryComponent', () => {
  let component: ListGeometryComponent;
  let fixture: ComponentFixture<ListGeometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGeometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

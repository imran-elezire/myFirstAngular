import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablDataComponent } from './tabl-data.component';

describe('TablDataComponent', () => {
  let component: TablDataComponent;
  let fixture: ComponentFixture<TablDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

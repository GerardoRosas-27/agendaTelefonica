import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContactosComponent } from './crear-contactos.component';

describe('CrearContactosComponent', () => {
  let component: CrearContactosComponent;
  let fixture: ComponentFixture<CrearContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearContactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

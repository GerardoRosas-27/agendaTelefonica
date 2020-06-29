import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGruposComponent } from './modal-grupos.component';

describe('ModalGruposComponent', () => {
  let component: ModalGruposComponent;
  let fixture: ComponentFixture<ModalGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

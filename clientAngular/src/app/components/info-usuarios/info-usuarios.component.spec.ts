import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUsuariosComponent } from './info-usuarios.component';

describe('InfoUsuariosComponent', () => {
  let component: InfoUsuariosComponent;
  let fixture: ComponentFixture<InfoUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

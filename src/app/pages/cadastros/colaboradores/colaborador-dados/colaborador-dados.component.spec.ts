import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorDadosComponent } from './colaborador-dados.component';

describe('ColaboradorDadosComponent', () => {
  let component: ColaboradorDadosComponent;
  let fixture: ComponentFixture<ColaboradorDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradorDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradorDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

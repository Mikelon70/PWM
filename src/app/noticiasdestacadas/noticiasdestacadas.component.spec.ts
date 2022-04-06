import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasdestacadasComponent } from './noticiasdestacadas.component';

describe('NoticiasdestacadasComponent', () => {
  let component: NoticiasdestacadasComponent;
  let fixture: ComponentFixture<NoticiasdestacadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasdestacadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasdestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

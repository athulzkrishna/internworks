import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutyouComponent } from './aboutyou.component';

describe('AboutyouComponent', () => {
  let component: AboutyouComponent;
  let fixture: ComponentFixture<AboutyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

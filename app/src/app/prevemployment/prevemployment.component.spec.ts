import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevemploymentComponent } from './prevemployment.component';

describe('PrevemploymentComponent', () => {
  let component: PrevemploymentComponent;
  let fixture: ComponentFixture<PrevemploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevemploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevemploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

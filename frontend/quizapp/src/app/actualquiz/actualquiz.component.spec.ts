import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualquizComponent } from './actualquiz.component';

describe('ActualquizComponent', () => {
  let component: ActualquizComponent;
  let fixture: ComponentFixture<ActualquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

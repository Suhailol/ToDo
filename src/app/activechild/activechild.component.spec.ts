import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivechildComponent } from './activechild.component';

describe('ActivechildComponent', () => {
  let component: ActivechildComponent;
  let fixture: ComponentFixture<ActivechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivechildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

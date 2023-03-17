import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedchildComponent } from './completedchild.component';

describe('CompletedchildComponent', () => {
  let component: CompletedchildComponent;
  let fixture: ComponentFixture<CompletedchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task7ChildComponent } from './task7-child.component';

describe('Task7ChildComponent', () => {
  let component: Task7ChildComponent;
  let fixture: ComponentFixture<Task7ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task7ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task7ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

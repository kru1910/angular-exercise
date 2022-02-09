import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3ChildComponent } from './task3-child.component';

describe('Task3ChildComponent', () => {
  let component: Task3ChildComponent;
  let fixture: ComponentFixture<Task3ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task3ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

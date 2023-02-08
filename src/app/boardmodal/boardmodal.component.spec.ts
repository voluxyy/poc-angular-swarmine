import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardmodalComponent } from './boardmodal.component';

describe('BoardmodalComponent', () => {
  let component: BoardmodalComponent;
  let fixture: ComponentFixture<BoardmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

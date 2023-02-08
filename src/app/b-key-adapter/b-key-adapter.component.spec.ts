import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BKeyAdapterComponent } from './b-key-adapter.component';

describe('BKeyAdapterComponent', () => {
  let component: BKeyAdapterComponent;
  let fixture: ComponentFixture<BKeyAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BKeyAdapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BKeyAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

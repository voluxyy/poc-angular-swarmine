import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworksmodalComponent } from './networksmodal.component';

describe('NetworksmodalComponent', () => {
  let component: NetworksmodalComponent;
  let fixture: ComponentFixture<NetworksmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworksmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworksmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

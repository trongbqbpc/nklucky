import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRoundComponent } from './random-round.component';

describe('RandomRoundComponent', () => {
  let component: RandomRoundComponent;
  let fixture: ComponentFixture<RandomRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomRoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

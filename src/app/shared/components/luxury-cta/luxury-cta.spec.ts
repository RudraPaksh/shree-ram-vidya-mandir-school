import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryCta } from './luxury-cta';

describe('LuxuryCta', () => {
  let component: LuxuryCta;
  let fixture: ComponentFixture<LuxuryCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxuryCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxuryCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessScreenPage } from './success-screen.page';

describe('SuccessScreenPage', () => {
  let component: SuccessScreenPage;
  let fixture: ComponentFixture<SuccessScreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessScreenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetaCardComponent } from './camiseta-card.component';

describe('CamisetaCardComponent', () => {
  let component: CamisetaCardComponent;
  let fixture: ComponentFixture<CamisetaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisetaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisetaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

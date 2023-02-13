import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioSectionComponent } from './portafolio-section.component';

describe('PortafolioSectionComponent', () => {
  let component: PortafolioSectionComponent;
  let fixture: ComponentFixture<PortafolioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

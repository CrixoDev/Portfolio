import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabexpComponent } from './labexp.component';

describe('LabexpComponent', () => {
  let component: LabexpComponent;
  let fixture: ComponentFixture<LabexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabexpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

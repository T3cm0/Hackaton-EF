import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioEditComponent } from './arrendatario-edit.component';

describe('ArrendatarioEditComponent', () => {
  let component: ArrendatarioEditComponent;
  let fixture: ComponentFixture<ArrendatarioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrendatarioEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendatarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDettagliComponent } from './tab-dettagli.component';

describe('TabDettagliComponent', () => {
  let component: TabDettagliComponent;
  let fixture: ComponentFixture<TabDettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDettagliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

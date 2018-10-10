import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CetegoryComponent } from './cetegory.component';

describe('CetegoryComponent', () => {
  let component: CetegoryComponent;
  let fixture: ComponentFixture<CetegoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetegoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CetegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

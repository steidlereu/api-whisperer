import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncapiUiComponent } from './asyncapi-ui.component';

describe('AsyncapiUiComponent', () => {
  let component: AsyncapiUiComponent;
  let fixture: ComponentFixture<AsyncapiUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncapiUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncapiUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MainLayoutComponent } from './main-layout.component';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutComponent ],
      imports: [ RouterTestingModule ]
    });

    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
  }));

  it('should have router-outlet directive', () => {
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });
});

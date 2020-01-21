import { async, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material-module";
import { AppModule } from "./app.module";
import { APP_BASE_HREF } from "@angular/common";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, MaterialModule],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

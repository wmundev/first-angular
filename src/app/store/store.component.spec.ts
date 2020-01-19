import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StoreComponent } from "./store.component";
import { MaterialModule } from "../material-module";

describe("StoreComponent", () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StoreComponent],
      imports: [MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

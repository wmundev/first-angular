import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VoterComponent } from "./voter.component";
import { By } from "@angular/platform-browser";

describe("VoterComponent", () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render total votes", () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();
    const voteCountElement = fixture.debugElement.query(By.css(".vote-count"));
    expect(voteCountElement.nativeElement.innerHTML).toBe("21");
  });
});

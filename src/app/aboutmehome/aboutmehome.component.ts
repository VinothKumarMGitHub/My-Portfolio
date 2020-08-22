import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-aboutmehome",
  templateUrl: "./aboutmehome.component.html",
  styleUrls: ["./aboutmehome.component.scss"],
})
export class AboutmehomeComponent implements OnInit {
  constructor(private route: Router) {
  }

  @Output() onMenuActionClick: EventEmitter<string> = new EventEmitter();

  public ngOnInit(): void {}

  public onMenuClick(menuname) {
    if (this.onMenuActionClick) this.onMenuActionClick.emit(menuname);
  }
}

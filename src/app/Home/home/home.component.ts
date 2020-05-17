import { Component, OnInit } from "@angular/core";
import { NgbPopoverConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [NgbPopoverConfig],
})
export class HomeComponent implements OnInit {
  constructor(config: NgbPopoverConfig) {
    config.placement = "right";
    config.triggers = "hover";
  }

  ngOnInit(): void {}
}

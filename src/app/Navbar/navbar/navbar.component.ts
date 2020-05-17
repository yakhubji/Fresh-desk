import { Component, OnInit } from "@angular/core";
import { NgbPopoverConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(config: NgbPopoverConfig) {
    config.placement = "bottom";
    config.triggers = "hover";
  }

  ngOnInit(): void {}
}

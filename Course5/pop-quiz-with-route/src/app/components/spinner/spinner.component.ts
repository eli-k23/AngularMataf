import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.css"]
})
export class SpinnerComponent implements OnInit {
  constructor() {}
  // from https://projects.lukehaas.me/css-loaders/
  @Input()
  isVisible: boolean = false;

  ngOnInit() {}
}

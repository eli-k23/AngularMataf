import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-expander",
  templateUrl: "./expander.component.html",
  styleUrls: ["./expander.component.css"]
})
export class ExpanderComponent implements OnInit {
  isExtended: boolean = false;

  @Input()
  caption: string = "";
  @Input()
  content: string = "";

  setExpender() {
    this.isExtended = !this.isExtended;
  }
  constructor() {}

  ngOnInit() {}
}

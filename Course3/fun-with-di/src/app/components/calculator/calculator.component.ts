import { Component } from "@angular/core";
import { AdditionService } from "src/app/services/addition.servise";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent {
  result: number;

  constructor(private addition: AdditionService) {}

  calcuate(a: string, b: string) {
    let op1 = Number(a);
    let op2 = Number(b);
    //this.result = op1 + op2;
    this.result = this.addition.add(op1, op2);
  }
}

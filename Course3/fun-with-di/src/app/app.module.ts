import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { AdditionService } from "./services/addition.servise";
import { AuditService } from "./services/audit.service";

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule],
  providers: [AdditionService, AuditService], // declate of provider and injector
  bootstrap: [AppComponent]
})
export class AppModule {}

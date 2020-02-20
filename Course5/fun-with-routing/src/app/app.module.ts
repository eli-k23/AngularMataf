import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { PageAComponent } from "./components/page-a/page-a.component";
import { PageBComponent } from "./components/page-b/page-b.component";
import { PageCComponent } from "./components/page-c/page-c.component";

@NgModule({
  declarations: [AppComponent, PageAComponent, PageBComponent, PageCComponent],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizDisplayComponent } from "./components/quiz-display/quiz-display.component";

const routes: Routes = [
  { path: "", redirectTo: "0", pathMatch: "full" },
  { path: ":index", component: QuizDisplayComponent },
  { path: "**", redirectTo: "0" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

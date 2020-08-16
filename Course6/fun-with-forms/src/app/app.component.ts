import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  userName = new FormControl("", Validators.required);
  form: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      username: new FormControl("", Validators.required),
      fullName: new FormControl("", [
        Validators.minLength(8),
        Validators.required,
        this.hasSpaceValidator
      ]),
      email: new FormControl("", [Validators.email, Validators.required])
    });
  }

  hasSpaceValidator(control: AbstractControl): null | ValidationErrors {
    let val = <string>control.value;
    let index = val.indexOf(" ");
    if (index > 0 && index < val.length - 1) return null;

    return { hasSpace: true };
  }
}

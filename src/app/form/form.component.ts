import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  dform: FormGroup;
  errorText: string;
  constructor(private fb: FormBuilder) {
    this.dform = this.fb.group({
      change_ref: ["", Validators.required]
    });
  }

  ngOnInit() {}
  goToCreate() {
    if (this.dform.untouched || this.dform.invalid) {
      this.errorText = "Please enter valid credentials";
    } else {
      this.errorText = "";
      alert("Successfully Created");
    }
  }
}

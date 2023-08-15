import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudFormService } from '../stud-form.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent implements OnInit {
  constructor(private studFormService: StudFormService) {}
  name: string;
  age: string;
  ngOnInit() {}
  submitData(form: NgForm) {
    console.log(form);
    if (form.valid) {
      console.log(form.value);
      this.studFormService.postForm(form.value);
    } else {
      console.log('invalid form');
    }
    form.reset();
  }
}

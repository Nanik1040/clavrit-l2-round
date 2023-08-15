import { Component, OnInit } from '@angular/core';
import { StudFormService } from '../stud-form.service';
@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css'],
})
export class ViewFormComponent implements OnInit {
  constructor(private studForm: StudFormService) {}
  studData: any[] = [];
  studArray: any[];
  ngOnInit() {
    this.studForm.getForm().subscribe((data) => {
      console.log(data, 'view-form');
      this.studData.push(data);
      // console.log(typeof this.studData);
      // console.log(this.studData.name);
    });
  }
}

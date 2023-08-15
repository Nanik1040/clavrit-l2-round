import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-container',
  templateUrl: './hello-container.component.html',
  styleUrls: ['./hello-container.component.css']
})
export class HelloContainerComponent implements OnInit {

  name = ""

  constructor() { }

  ngOnInit() {
  }

}
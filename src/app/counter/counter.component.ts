import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  @HostBinding('class.someClass') someField: boolean = true;

  @Input()
  name = "Counter";

  @Input()
  initialCount = 0

  _count = 0;

  constructor() { }

  ngOnInit() {
    this._count = this.initialCount;
  }

  increment() {
    this._count++;
  }

  decrement() {
      this._count--;
  }

  get count() {
    return this._count;
  }
}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counters-container',
  templateUrl: './counters-container.component.html',
  styleUrls: ['./counters-container.component.css']
})
export class CountersContainerComponent implements OnInit {

  constructor() { }

  @Input()
  _numCounters = 3

  counters = []

  ngOnInit() {
    this.counters = [];
    for (var i = 0; i < this.numCounters; i++) {
      this.counters.push(Math.floor((Math.random() * 100) + 1));
    }
  }
 
  get numCounters() {
    return this._numCounters;
  }

  set numCounters(val) {
    this._numCounters = val;
    this.counters = [];
    for (var i = 0; i < this._numCounters; i++) {
      this.counters.push(Math.floor((Math.random() * 100) + 1));
    }
  }

}
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StudFormService {
  constructor() {}

  private studSubj = new Subject<string[]>();

  postForm(form: string[]) {
    this.studSubj.next(form);
  }
  getForm() {
    return this.studSubj.asObservable();
  }
}

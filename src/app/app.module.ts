import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { HelloContainerComponent } from './hello-container/hello-container.component';
import { CounterContainerComponent } from './counter-container/counter-container.component';
import { CountersContainerComponent } from './counters-container/counters-container.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { ViewFormComponent } from './view-form/view-form.component';

const appRoutes: Routes = [
  { path: '', component: CounterContainerComponent },
  { path: 'hello', component: HelloContainerComponent },
  { path: 'counter', component: CounterContainerComponent },
  { path: 'counters', component: CountersContainerComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    HelloContainerComponent,
    CounterContainerComponent,
    CountersContainerComponent,
    FormCreateComponent,
    ViewFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

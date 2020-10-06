import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { MyNgIfTestComponent } from './my-ng-if-test/my-ng-if-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNgIfDirective,
    MyNgIfTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

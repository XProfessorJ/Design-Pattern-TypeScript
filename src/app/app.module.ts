import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessibilityTestComponent } from './accessibility-test/accessibility-test.component';
import { ObservableComponent } from './design-pattern/observable/observable.component';
import { PubSubComponent } from './design-pattern/pub-sub/pub-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessibilityTestComponent,
    ObservableComponent,
    PubSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

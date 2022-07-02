import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessibilityTestComponent } from './accessibility-test/accessibility-test.component';
import { ObservableComponent } from './design-pattern/observable/observable.component';
import { PubSubComponent } from './design-pattern/pub-sub/pub-sub.component';
import { DecoratorPatternComponent } from './design-pattern/decorator-pattern/decorator-pattern.component';
import { SigletonComponent } from './design-pattern/sigleton/sigleton.component';
import { CommandComponent } from './design-pattern/command/command.component';
import { AdapterComponent } from './design-pattern/adapter/adapter.component';
import { TemplateComponent } from './design-pattern/template/template.component';
import { IteratorComponent } from './design-pattern/iterator/iterator.component';
import { StateComponent } from './design-pattern/state/state.component';
import { DecoratorComponent } from './design-pattern/decorator/decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessibilityTestComponent,
    ObservableComponent,
    PubSubComponent,
    DecoratorPatternComponent,
    SigletonComponent,
    CommandComponent,
    AdapterComponent,
    TemplateComponent,
    IteratorComponent,
    StateComponent,
    DecoratorComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

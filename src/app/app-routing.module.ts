import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibilityTestComponent } from './accessibility-test/accessibility-test.component';
import { DecoratorPatternComponent } from './design-pattern/decorator-pattern/decorator-pattern.component';
import { ObservableComponent } from './design-pattern/observable/observable.component';
import { PubSubComponent } from './design-pattern/pub-sub/pub-sub.component';

const routes: Routes = [
  {
    path: 'app-accessibility-test',
    component: AccessibilityTestComponent,
  },
  {
    path: 'observable-pattern',
    component: ObservableComponent,
  },
  {
    path: 'pubSubComponent-pattern',
    component: PubSubComponent,
  },
  { path: 'DecoratorPatternComponent', component: DecoratorPatternComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibilityTestComponent } from './accessibility-test/accessibility-test.component';
import { CommandComponent } from './design-pattern/command/command.component';
import { DecoratorPatternComponent } from './design-pattern/decorator-pattern/decorator-pattern.component';
import { IteratorComponent } from './design-pattern/iterator/iterator.component';
import { ObservableComponent } from './design-pattern/observable/observable.component';
import { PubSubComponent } from './design-pattern/pub-sub/pub-sub.component';
import { StateComponent } from './design-pattern/state/state.component';
import { TemplateComponent } from './design-pattern/template/template.component';

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
  { path: 'CommandComponent', component: CommandComponent },
  { path: 'TemplateComponent', component: TemplateComponent },
  { path: 'IteratorComponent', component: IteratorComponent },
  { path: 'StateComponent', component: StateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

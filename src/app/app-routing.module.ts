import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModelBindingComponent } from './ng-model-binding/ng-model-binding.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { SwitchComponent } from './switch/switch.component';
import { DirectiveComponent } from './directive/directive.component';
import { ServiceAuthComponent } from './service-auth/service-auth.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { InteractionsBetweenComponentsComponent } from './interactions-between-components/interactions-between-components.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ng-model-binding', component: NgModelBindingComponent },
  { path: 'if', component: IfComponent },
  { path: 'for', component: ForComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'directives', component: DirectiveComponent },
  { path: 'services', component: ServiceAuthComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  {
    path: 'interactionsbetweencomponents',
    component: InteractionsBetweenComponentsComponent,
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

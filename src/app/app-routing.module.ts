import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DirectiveComponent } from './directive/directive.component';
import { ForComponent } from './for/for.component';
import { HomeComponent } from './home/home.component';
import { HttpMethodComponent } from './http-method/http-method.component';
import { IfComponent } from './if/if.component';
import { InteractionsBetweenComponentsComponent } from './interactions-between-components/interactions-between-components.component';
import { NgModelBindingComponent } from './ng-model-binding/ng-model-binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServiceAuthComponent } from './service-auth/service-auth.component';
import { SwitchComponent } from './switch/switch.component';

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
  { path: 'httpmethod', component: HttpMethodComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

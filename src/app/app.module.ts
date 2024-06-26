import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModelBindingComponent } from './ng-model-binding/ng-model-binding.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { SwitchComponent } from './switch/switch.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { ServiceAuthComponent } from './service-auth/service-auth.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { InteractionsBetweenComponentsComponent } from './interactions-between-components/interactions-between-components.component';
import { ChildComponent } from './interactions-between-components/child/child.component';
import { HttpMethodComponent } from './http-method/http-method.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateModelComponent } from './http-method/update-model/update-model.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    NgModelBindingComponent,
    IfComponent,
    ForComponent,
    SwitchComponent,
    DirectiveComponent,
    HighLightDirective,
    ServiceAuthComponent,
    ReactiveFormComponent,
    InteractionsBetweenComponentsComponent,
    ChildComponent,
    HttpMethodComponent,
    UpdateModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

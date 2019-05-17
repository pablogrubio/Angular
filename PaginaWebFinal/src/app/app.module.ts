import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersService} from './users.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {RegisterComponent} from './register/register.component';
import {WhoComponent} from './who/who.component';
import {ContactComponent} from './contact/form.component';
import {FormDetailComponent} from './form-detail/form-detail.component';
import {LoginComponent} from  './login/login.component';
import {KnowledgeComponent} from  './knowledge/knowledge.component';
import {ExperienceComponent} from  './experience/experience.component';
import {TokenInterceptor} from './token.interceptor';
import {LoginViewComponent} from './login-view/login-view.component';
import {IntroComponent} from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    UserDetailComponent,
    RegisterComponent,
    WhoComponent,
    ContactComponent,
    FormDetailComponent,
    LoginComponent,
    KnowledgeComponent,
    ExperienceComponent,
    LoginViewComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

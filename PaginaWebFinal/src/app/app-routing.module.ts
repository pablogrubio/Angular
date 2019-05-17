import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {RegisterComponent} from './register/register.component';
import {WhoComponent} from './who/who.component';
import {ContactComponent} from './contact/form.component';
import {FormDetailComponent} from  './form-detail/form-detail.component';
import {LoginComponent} from  './login/login.component';
import {KnowledgeComponent} from  './knowledge/knowledge.component';
import {ExperienceComponent} from  './experience/experience.component';
import {LoginViewComponent} from './login-view/login-view.component';
import {IntroComponent} from './intro/intro.component';


const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: ContentComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'who',component: WhoComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'contact/:id',component: FormDetailComponent},
  {path: 'login',component: LoginComponent},
  {path: 'knowledge',component: KnowledgeComponent},
  {path: 'experience',component: ExperienceComponent},
  {path: 'loginView',component: LoginViewComponent},
  {path: 'intro',component: IntroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

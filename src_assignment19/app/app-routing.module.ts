import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OsNameComponent } from './os-name/os-name.component';
import { AppComponent } from './app.component';
import { InvalidComponent } from './invalid/invalid.component';
import { LanguagesComponent } from './languages/languages.component';

const routes: Routes = [
  
  {'path':'os',component:OsNameComponent},
  {'path':'',component:AppComponent},
  {'path':'lang',component:LanguagesComponent},
  {'path':'**',component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

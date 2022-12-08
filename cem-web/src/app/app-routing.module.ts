import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from "./about-page/about-page.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";


const routes: Routes = [
  { path: '', component: AboutPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'notfound', component: NotFoundPageComponent },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

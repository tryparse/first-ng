import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './components/cats/cats.component';
import { LanguagesComponent } from './components/languages/languages.component';

const routes: Routes = [
  { path: '', redirectTo: '/languages', pathMatch: 'full' },
  { path: 'languages', component: LanguagesComponent },
  { path: 'cats', component: CatsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

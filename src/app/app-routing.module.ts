import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from './MyComponent/ToDos/to-dos.component';
import { AboutComponent } from './MyComponent/about/about.component';

const routes: Routes = [
  { path: '', component: ToDosComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

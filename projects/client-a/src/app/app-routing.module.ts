import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmptyComponent } from './empty/empty.component';


const routes: Routes = [
  { path: '', redirectTo: 'client-a/home', pathMatch: 'full' },
  { path: 'client-a/home', component: HomeComponent },
  { path: 'client-a/about', component: AboutComponent },
  { path: '**', component: EmptyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

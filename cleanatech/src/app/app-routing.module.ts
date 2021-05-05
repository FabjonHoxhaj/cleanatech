import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsComponent } from './uns/uns.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{ path: "", redirectTo: "home", pathMatch: "full" },
{ path: "uns", component: UnsComponent },
{ path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

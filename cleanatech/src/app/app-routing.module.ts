import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsComponent } from './uns/uns.component';


const routes: Routes = [{ path: " ", redirectTo: "home", pathMatch: "full" }, { path: "uns", component: UnsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

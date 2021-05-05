import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsComponent } from './uns/uns.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{ path: "", redirectTo: "home", pathMatch: "full" },
{ path: "uns", component: UnsComponent },
{ path: "home", component: HomeComponent },
{ path: "kontakt", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

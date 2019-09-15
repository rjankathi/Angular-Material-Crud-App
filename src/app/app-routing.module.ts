import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // 1st route
  {path: '', loadChildren: './features/contactc/contacts.module#ContactsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      {
      enableTracing: true , // Debugging purpose only
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

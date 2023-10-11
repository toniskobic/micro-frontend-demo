import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { endsWith } from '@angular-architects/module-federation-tools';

const routes: Routes = [
  { matcher: endsWith('mfe1'), component: HomeComponent },
  {
    matcher: endsWith('mfe1/demo'),
    loadChildren: () =>
      import('./modules/demo/demo.module').then((m) => m.DemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

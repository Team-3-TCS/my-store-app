import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
=======
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'agent',
    loadChildren: () =>
      import('./pages/agent/agent.module').then((m) => m.AgentModule),
  },
];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'agent',
    loadChildren: () =>
      import('./pages/agent/agent.module').then((m) => m.AgentModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/clientes/clientes.module').then((m) => m.ClientesModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent, ServiceInfoComponent } from './index';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'info',
        children: [
        {
          path: '',
          component: InfoComponent
        },
        {
          path: ':service',
          component: ServiceInfoComponent
        }]
      }
    ])
  ],
  exports: [RouterModule]
})
export class InfoRoutingModule { }


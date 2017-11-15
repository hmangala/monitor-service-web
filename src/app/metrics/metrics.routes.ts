import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MetricsComponent } from './index';
import { MemoryComponent } from './memory/memory.component';
import { HeapComponent } from './heap/heap.component';
import { ThreadsComponent } from './threads/threads.component';
import { GCComponent } from './gc/gc.component';
import { NetworkComponent } from './network/network.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'metrics',
        children: [
        {
          path: '',
          component: MetricsComponent
        },
        {
          path: 'mem',
          component: MemoryComponent,
        },
        {
          path: 'heap',
          component: HeapComponent,
        },
        {
          path: 'threads',
          component: ThreadsComponent,
        },
        {
          path: 'gc',
          component: GCComponent,
        },
        {
          path: 'network',
          component: NetworkComponent,
        }]
      }
    ])
  ],
  exports: [RouterModule]
})
export class MetricsRoutingModule { }

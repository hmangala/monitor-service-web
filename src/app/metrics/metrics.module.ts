import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MetricsComponent } from './metrics.component';
import { MemoryComponent } from './memory/memory.component';
import { HeapComponent } from './heap/heap.component';
import { ThreadsComponent } from './threads/threads.component';
import { GCComponent } from './gc/gc.component';
import { NetworkComponent } from './network/network.component';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { MetricsRoutingModule } from './metrics.routes';

@NgModule({
    imports: [CommonModule, SharedModule, Ng2HighchartsModule, MetricsRoutingModule],
    declarations: [MetricsComponent, MemoryComponent, HeapComponent, ThreadsComponent, GCComponent, NetworkComponent],
    exports: [MetricsComponent]
})

export class MetricsModule { }

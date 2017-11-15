import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './info.component';
import { ServiceInfoComponent } from './service-info.component';
import { ModalComponent } from '../directives/index';
import { InfoRoutingModule } from './info.routes';

@NgModule({
    imports: [CommonModule, SharedModule, InfoRoutingModule],
    declarations: [InfoComponent, ServiceInfoComponent, ModalComponent],
    exports: [InfoComponent, ServiceInfoComponent, ModalComponent]
})

export class InfoModule { }

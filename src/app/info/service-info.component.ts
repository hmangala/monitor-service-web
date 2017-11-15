import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceInfo } from '../shared/models/service-info';
import { InfoService } from '../shared/info/index';
import { ModalService } from '../shared/modal/index';

@Component({
	moduleId: module.id,
	selector: 'service-info',
    styleUrls: ['info.component.css', 'service-info.component.css'],
    templateUrl: 'service-info.component.html'
})

export class ServiceInfoComponent implements OnInit {
    serviceInfo: ServiceInfo;
    serviceName: string;
    uptimeStr: string;
    bodyText: string;
    constructor(private service: InfoService,private route: ActivatedRoute,private router: Router,private modalService: ModalService) {}

    ngOnInit(): any {
        this.bodyText = 'This text can be updated in modal 1';
        this.route.params.forEach(params => {
            this.serviceName = params['service'];
            this.service.getServiceInfo(this.serviceName).subscribe(data => {
                this.serviceInfo = data;
                this.populateUptime();
            });
        });
    }

    populateUptime() {
        let uptime: number = parseInt(this.serviceInfo.uptime);
        let days: number = Math.floor((((uptime / 1000) / 60) / 60) / 24);
        uptime = uptime - (days * 24 * 60 * 60 * 1000);
        let hrs: number = Math.floor(((uptime / 1000) / 60) / 60);
        uptime = uptime - (hrs * 60 * 60 * 1000);
        let mins: number = Math.floor((uptime / 1000) / 60);
        uptime = uptime - (mins * 60 * 1000);
        let secs = Math.floor(uptime / 1000);
        this.uptimeStr = days + 'd  ' + hrs + 'h  ' + mins+ 'm  ' + secs + 's  ';
    }
    openModal(id: string) {
        let knowReq: boolean = false;
        let serviceRequest: string;
        this.bodyText = id;
        if(id === 'thread-dump') {
            serviceRequest = 'dump';
            knowReq = true;
        }
        if(id === 'trace') {
            serviceRequest = 'trace';
            knowReq = true;
        }
        if(id === 'beans') {
           serviceRequest = 'beans';
           knowReq = true;
        }
        if(id === 'mappings') {
           serviceRequest = 'mappings';
           knowReq = true;
        }
        if(id ==='configprops') {
           serviceRequest = 'configprops';
           knowReq = true;
        }
        if(knowReq) {
             this.service.getServiceResponse(this.serviceName,serviceRequest).subscribe(data => {
                this.bodyText = data;
            });
        }
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}

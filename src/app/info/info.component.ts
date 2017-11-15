import { Component, OnInit } from '@angular/core';
import { InfoService } from '../shared/info/index';



@Component({
	moduleId: module.id,
	selector: 'info-panel',
    styleUrls: ['info.component.css'],
	templateUrl: 'info.component.html'
})

export class InfoComponent implements OnInit {
    services: string[];
     constructor(private service: InfoService) { }

	ngOnInit(): any {
         this.service.getServices().subscribe(data => {
 			for (var i in data) {
                data[i] = data[i].trim();
            }
            this.services = data;
        });
    }

    getClass(service: string): string {
        if(service === 'TransactionService') {
            return 'w3-blue';
        }
        if(service === 'WorkflowService') {
            return 'w3-indigo';
        }
        if(service === 'AdapterService') {
            return 'w3-orange';
        }
        if(service === 'EnrollmentService') {
            return 'w3-purple';
        }
        if(service === 'ApiGatewayService') {
            return 'w3-red';
        }
        if(service === 'BatchService') {
            return 'w3-brown';
        }
        if(service === 'SurveyService') {
            return 'w3-yellow';
        }
        if(service === 'LoggingService') {
            return 'w3-lime';
        }
        if(service === 'ReportingService') {
            return 'w3-pink'
        }
        return 'w3-green';
    }
}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Ng2Highstocks } from 'ng2-highcharts';
import { MetricsService } from '../../shared/metrics/index';

@Component({
	moduleId: module.id,
	selector: 'network-charts',
	templateUrl: 'network.component.html'
})

export class NetworkComponent implements OnInit, AfterViewInit {
	@ViewChild(Ng2Highstocks) stock: Ng2Highstocks;
	chartStockHttpSessionMax = {};
	chartStockHttpSessionActive = {};
    constructor(private service: MetricsService) {}
	ngOnInit(): any {
	    this.service.getHttpSessionMaxMetrics().subscribe(data => {
            this.chartStockHttpSessionMax = {
				rangeSelector: {
					selected: 1
				},
				title: {
					text: 'Http Session Max'
				},
				series: data
			};
        });

        this.service.getHttpSessionActiveMetrics().subscribe(data => {
            this.chartStockHttpSessionActive = {
				rangeSelector: {
					selected: 1
				},
				title: {
					text: 'Http Session Active'
				},
				series: data
			};
        });
	}

	ngAfterViewInit() : void {
		setTimeout(() => { console.log(this.stock.chart); }, 1000);
	}

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Ng2Highstocks } from 'ng2-highcharts';
import { MetricsService } from '../../shared/metrics/index';

@Component({
	moduleId: module.id,
	selector: 'heap-charts',
	templateUrl: 'heap.component.html'
})

export class HeapComponent implements OnInit, AfterViewInit {
	@ViewChild(Ng2Highstocks) stock: Ng2Highstocks;
	chartStockHeap = {};
    chartStockHeapInit = {};
	chartStockHeapUsed = {};
    chartStockHeapCommitted = {};
    constructor(private service: MetricsService) {}
	ngOnInit(): any {
	    this.service.getHeapMetrics().subscribe(data => {
            this.chartStockHeap = {
				rangeSelector: {
					selected: 1
				},
				title: {
					text: 'Heap'
				},
				series: data
			};
        });
        this.service.getHeapInitMetrics().subscribe(data => {
            this.chartStockHeapInit = {
				rangeSelector: {
					selected: 1
				},
				title: {
					text: 'Heap Init'
				},
				series: data
			};
        });
        this.service.getHeapUsedMetrics().subscribe(data => {
            this.chartStockHeapUsed = {
				rangeSelector: {
					selected: 1
				},
				title: {
					text: 'Heap Used'
				},
				series: data
			};
        });
        this.service.getHeapCommittedMetrics().subscribe(data => {
            this.chartStockHeapCommitted = {
				rangeSelector: {
					selected: 1
				},
				title: {
					text: 'Heap Committed'
				},
				series: data
			};
        });
	}
	ngAfterViewInit() : void {
		setTimeout(() => { console.log(this.stock.chart); }, 1000);
	}
}

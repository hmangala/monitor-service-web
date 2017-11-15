import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Ng2Highstocks } from 'ng2-highcharts';
import { MetricsService } from '../../shared/metrics/index';

@Component({
    moduleId: module.id,
    selector: 'mem-charts',
    templateUrl: 'memory.component.html'
})

export class MemoryComponent implements OnInit, AfterViewInit {
    @ViewChild(Ng2Highstocks) stock: Ng2Highstocks;
    chartStockMem = {};
    chartStockMemFree = {};
    chartStockSysLoadAvg = {};
    constructor(private service: MetricsService) {}

    ngOnInit(): any {
        this.service.getMemMetrics().subscribe(data => {
            this.chartStockMem = {
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: 'Total Memory'
                },
                series: data
            };
        });
        this.service.getMemFreeMetrics().subscribe(data => {
            this.chartStockMemFree = {
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: 'Memory Free'
                },
                series: data
            };
        });

        this.service.getSysLoadAvgMetrics().subscribe(data => {
            this.chartStockSysLoadAvg = {
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: 'System Load Average'
                },
                series: data
            };
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => { console.log(this.stock.chart); }, 1000);
    }
}

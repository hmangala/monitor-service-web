import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Ng2Highstocks } from 'ng2-highcharts';
import { MetricsService } from '../../shared/metrics/index';

@Component({
    moduleId: module.id,
    selector: 'threads-charts',
    templateUrl: 'threads.component.html'
})

export class ThreadsComponent implements OnInit, AfterViewInit {
    @ViewChild(Ng2Highstocks) stock: Ng2Highstocks;
    chartStockThreads = {};
    chartStockThreadsPeak = {};
    chartStockThreadsDaemon = {};
    chartStockThreadsTotalStarted = {};
    constructor(private service: MetricsService) {}

    ngOnInit(): any {
        this.service.getThreadsMetrics().subscribe(data => {
            this.chartStockThreads = {
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: 'Threads'
                },
                series: data
            };
        });
        this.service.getThreadsPeakMetrics().subscribe(data => {
            this.chartStockThreadsPeak = {
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: 'Threads Peak'
                },
                series: data
            };
        });
        this.service.getThraedsDaemonMetrics().subscribe(data => {
            this.chartStockThreadsDaemon = {
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: 'Threads Daemon'
                },
                series: data
            };
        });
        this.service.getThreadsTotalStartedMetrics().subscribe(data => {
            this.chartStockThreadsTotalStarted = {
                rangeSelector: {
                    selected: 1
                },
                title: {
                    text: 'Threads Total Started'
                },
                series: data
            };
        });
    }

    ngAfterViewInit() : void {
        setTimeout(() => { console.log(this.stock.chart); }, 1000);
    }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Ng2Highstocks } from 'ng2-highcharts';
import { MetricsService } from '../../shared/metrics/index';

@Component({
  moduleId: module.id,
  selector: 'gc-charts',
  templateUrl: 'gc.component.html'
})

export class GCComponent implements OnInit, AfterViewInit {
  @ViewChild(Ng2Highstocks) stock: Ng2Highstocks;
  chartStockGcYngGenCount = {};
  chartStockGcYngGenTime = {};
  chartStockGcOldGenCount = {};
  chartStockGcOldGenTime = {};
  constructor(private service: MetricsService) { }
  ngOnInit(): any {
    this.service.getGcYngGenCountMetrics().subscribe(data => {
      this.chartStockGcYngGenCount = {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'GC Young Generation Count'
        },
        series: data
      };
    });
    this.service.getGcYngGenTimeMetrics().subscribe(data => {
      this.chartStockGcYngGenTime = {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'GC Young Generation Time'
        },
        series: data
      };
    });
    this.service.getGcOldGenCountMetrics().subscribe(data => {
      this.chartStockGcOldGenCount = {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'GC Old Generation Count'
        },
        series: data
      };
    });
    this.service.getGcOldGenTimeMetrics().subscribe(data => {
      this.chartStockGcOldGenTime = {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'GC Old Generation Time'
        },
        series: data
      };
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => { console.log(this.stock.chart); }, 1000);
  }
}

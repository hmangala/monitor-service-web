import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()
export class MetricsService {
  private memMetricsUrl = environment.SERVER_URL + '/stats/';
  private requestParams: URLSearchParams;
  constructor(private http: Http) {
      const today: Date = new Date();
      const endTime: string = this.getDateInFormat(today);
      const timeVal: number = today.getTime() - (2 * 24 * 60 * 60 * 1000);
      const startTime: string = this.getDateInFormat(new Date(timeVal));
      this.requestParams = new URLSearchParams();
      this.requestParams.set('startTime', startTime);
      this.requestParams.set('endTime', endTime);
  }

  getDateInFormat(date: Date): string {
    return date.getFullYear()+ '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }

  getMemMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-mem/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getMemFreeMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-mem-free/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getHeapMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-heap/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getHeapInitMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-heap-init/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getHeapUsedMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-heap-used/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getHeapCommittedMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-heap-commited/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getThreadsMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-threads/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getThreadsPeakMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-threads-peak/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getThraedsDaemonMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-threads-daemon/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getThreadsTotalStartedMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-threads-total-started/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getGcYngGenCountMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-gc-young-gen-count/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getGcYngGenTimeMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-gc-young-gen-time/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getGcOldGenCountMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-gc-old-gen-count/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getGcOldGenTimeMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-gc-old-gen-time/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getSysLoadAvgMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-system-load-average/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getHttpSessionMaxMetrics(): Observable<string> {
      return this.http.get(`${this.memMetricsUrl}metrics-http-session-max/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

   getHttpSessionActiveMetrics(): Observable<string> {
       return this.http.get(`${this.memMetricsUrl}metrics-http-session-active/`, {search: this.requestParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  /**
   * Handle any errors from the API
   */
  private handleError(err: any) {
    let errMessage: string;
    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }
    return Observable.throw(errMessage);
  }

}

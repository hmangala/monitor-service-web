import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceInfo } from '../models/service-info';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()
export class InfoService {
  private infoUrl = environment.SERVER_URL + '/stats/';
  constructor(private http: Http) {}
  getServices(): Observable<string[]> {
      return this.http.get(`${this.infoUrl}services/`)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getServiceInfo(serviceName: string): Observable<ServiceInfo> {
    return this.http.get(`${this.infoUrl}services-info/?serviceName=${serviceName}`)
      .map(response => response.json())
      .map(this.toServiceInfo)
      .catch(this.handleError);
  }

  trim(data: any): string {
    return data.trim();
  }

  toServiceInfo(data: any): ServiceInfo {
    return{
        uptime: data.upTime,
        processors: data.processors,
        classes: data.classes,
        classesLoaded: data.classesLoaded,
        classesUnloaded: data.classesUnloaded
    };
  }

  getServiceResponse(serviceName: string, serviceRequest: string): Observable<string> {
    return this.http.get(`${this.infoUrl}services-response/?serviceName=${serviceName}&serviceRequest=${serviceRequest}`)
      .map(response => response.json())
      .map(this.stringify)
      .catch(this.handleError);
  }

  stringify(data: any): string {
    return JSON.stringify(data, null, 2);
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

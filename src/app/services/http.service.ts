import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../shared/models/http.model';
import { StorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  session: any = this.storageService.getSessionToken()
  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  public getDataWithToken(url: string, requestParam?: any): Observable<any> {

      
    const headers = new HttpHeaders({
      Authorization: this.session.token,
      platform: 'web',
    });

    const params = requestParam
    ? this.generateHttpParam(requestParam)
    : undefined;
    
    return this.httpClient.get(url, { headers, params });
  }

  public postDataWithToken(url: string, requestBody: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.session.token,
      platform: 'web',
    });

    return this.httpClient.post(url, requestBody, { headers });
  }

  public postData(url: string, requestBody: any): Observable<any> {
    const headers = new HttpHeaders({
      platform: 'web',
    });

    return this.httpClient.post(url, requestBody, { headers });
  }

  private generateHttpParam(param: any): HttpParams {
    let result = new HttpParams();

    if (param) {
        Object.keys(param).forEach((key) => {
            if (
                param[key] !== null &&
                param[key] !== undefined &&
                param[key] !== ''
            ) {
                result = result.set(key, param[key]);
            }
        });
    }

    return result;
}
}
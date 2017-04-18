import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithMetricsApiUrl;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public Get = (): Observable<any> => {
        return this._http.get(this.actionUrl)
            .map(response => response.json())
            .catch(this.handleError);
    }

    public GetChart2 = (): Observable<any> => {
        return this._http.get(this.actionUrl + '?chart=chart2')
            .map(response => response.json())
            .catch(this.handleError);
    }

    public GetChart3 = (): Observable<any> => {
        return this._http.get(this.actionUrl + '?chart=chart3')
            .map(response => response.json())
            .catch(this.handleError);
    }

    public GetAll = (): Observable<any[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <any[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

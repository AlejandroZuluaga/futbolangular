import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Calendario } from '../calendario/calendario';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CalendarioServices {
    public url: string;
    calendarioList: Array<Calendario>;
    headersPost: Headers;
    options: RequestOptions;


    constructor(private http: HttpClient, private _http: Http) {

    }

    getCalendario() {
        this.http.get('http://localhost:8081/futbolangular/webresources/com.entidades.futbolangular.jugador')
            .subscribe(data => {
                this.calendarioList = data as Array<Calendario>;
            });
    }

    addCalendario(calendarioAdd: Calendario) {
        const json = JSON.stringify(calendarioAdd);
        const params = json;
        const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

        return this._http.post('http://localhost:8081/futbolangular/webresources/com.entidades.futbolangular.jugador',
            params, { headers: headers }).map(res => res.json());

    }

}


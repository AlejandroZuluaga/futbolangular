import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Equipo } from '../equipo/equipo';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class EquipoServices {
    public url: string;
    equipoList: Array<Equipo>;
    headersPost: Headers;
    options: RequestOptions;


    constructor(private http: HttpClient, private _http: Http) {

    }

    getEquipo() {
        this.http.get('http://localhost:8081/futbolangular/webresources/com.entidades.futbolangular.equipo')
            .subscribe(data => {
                this.equipoList = data as Array<Equipo>;
            });
    }

    addEquipo(equipoAdd: Equipo) {
        const json = JSON.stringify(equipoAdd);
        const params = json;
        const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

        return this._http.post('http://localhost:8081/futbolangular/webresources/com.entidades.futbolangular.equipo',
            params, { headers: headers }).map(res => res.json());

    }

}


import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EquipoServices } from '../../services/equipo.services';
import { Equipo } from '../equipo';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-list-equipo',
  templateUrl: './list-equipo.component.html',
  styleUrls: ['./list-equipo.component.css'],
  providers: [EquipoServices]

})


export class ListEquipoComponent implements OnInit {
  public titulo: string;
   constructor(
       private equipoServices: EquipoServices
  ) { this.titulo = ' Listado de Equipos '; }
  ngOnInit() {
    this.equipoServices.getEquipo();

  }
}

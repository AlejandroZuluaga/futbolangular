import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CalendarioServices } from '../../services/calendario.services';
import { Calendario } from '../calendario';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-list-calendario',
  templateUrl: './list-calendario.component.html',
  styleUrls: ['./list-calendario.component.css'],
  providers: [CalendarioServices]

})
export class ListCalendarioComponent implements OnInit {
  public titulo: string;

  constructor(private calendarioServices: CalendarioServices) {
    this.titulo = 'Calendarios';
   }

  ngOnInit() {
    this.calendarioServices.getCalendario();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CalendarioServices } from '../../services/calendario.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Calendario } from '../calendario';
@Component({
  selector: 'app-add-calendario',
  templateUrl: './add-calendario.component.html',
  styleUrls: ['./add-calendario.component.css']


})
export class AddCalendarioComponent implements OnInit {
  calendario: Calendario;
  constructor(
    private calendarioServices: CalendarioServices,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.calendario = new Calendario(0, 'Nombre Jugador', 'Apellidos ', 0);

  }
  ngOnInit() {
  }
  onSave() {
    this.calendarioServices.addCalendario(this.calendario).subscribe(
      response => {
        if (response.code === 200) {
          alert('Registro Guardado Exitosamente');

        } else {
          console.log(response);
        }
      }, error => {
        console.log(<any>error);
      }
    );
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EquipoModule } from './equipo/equipo.module';
import { HttpClientModule } from '@angular/common/http';
import { CalendarioModule } from './calendario/calendario.module';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { EquipoServices } from './services/equipo.services';
import { CalendarioServices } from './services/calendario.services';
import { IndexComponent } from './equipo/index/index.component';
import { ListEquipoComponent } from './equipo/list-equipo/list-equipo.component';
import { AddEquipoComponent } from './equipo/add-equipo/add-equipo.component';
import { CurrentOptionComponent } from './current-option/current-option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { AddCalendarioComponent } from './calendario/add-calendario/add-calendario.component';
import { ListCalendarioComponent } from './calendario/list-calendario/list-calendario.component';
import { IndexCalendarioComponent } from './calendario/index-calendario/index-calendario.component';
const appRoutes: Routes = [
  { path: 'equipo/index', component: IndexComponent },
  { path: 'calendario/index', component: IndexCalendarioComponent },
  { path: 'equipo/list', component: ListEquipoComponent },
  { path: 'equipo/add', component: AddEquipoComponent },
  { path: 'calendario/add', component: AddCalendarioComponent },
  { path: 'calendario/list', component: ListCalendarioComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    EquipoModule,
    CalendarioModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [EquipoServices, CalendarioServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

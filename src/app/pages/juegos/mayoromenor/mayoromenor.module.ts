import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MayoromenorRoutingModule } from './mayoromenor-routing.module';
import { MayoromenorComponent } from './mayoromenor.component';
import { PuntuacionModule } from 'src/app/components/puntuacion/puntuacion.module';


@NgModule({
  declarations: [
    MayoromenorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MayoromenorRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    PuntuacionModule
  ]
})
export class MayoromenorModule { }

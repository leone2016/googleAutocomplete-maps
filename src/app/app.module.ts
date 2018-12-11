import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MaterialModule} from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
//google maps
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GooglePlacesDirective } from './components/mapa/google-places.directive';

@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent,
    GooglePlacesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2pBQOVBtCWXm0uZ8IOAXXSOap9kvv7kw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

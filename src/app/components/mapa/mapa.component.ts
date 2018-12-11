import {Component, NgZone, OnInit} from '@angular/core';
import {Marcador} from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MapaEditarComponent} from './mapa-editar.component';
import {isNullOrUndefined} from 'util';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  title: string = 'My first AGM project';
  title2: string = 'Hi';
  lat= -0.04534973084617785;
  lng= -78.45620187116288;
  public addrKeys: string[];
  public addr: object;



  constructor(public snackBar: MatSnackBar,public dialog: MatDialog, private zone: NgZone) {
    if( localStorage.getItem('marcadores') ){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
    // const  nuevoMarcador =  new Marcador( -0.203353772213908, -78.48174703782837);
    // this.marcadores.push(nuevoMarcador);
  }

  //Method to be invoked everytime we receive a new instance
  //of the address object from the onSelect event emitter.

  private setAddress(addrObj):void {
    //We are wrapping this in a NgZone to reflect the changes
    //to the object in the DOM.
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
      this.lat = this.addr['lat'];
      this.lng = this.addr['lng'];
    });
  }
  private  agregarMarcador(event:any):void{
    const coords:{lat:number,lng:number} = event.coords;
    const  nuevoMarcador =  new Marcador( coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarLocalStorage();
    // Simple message with an action.
     this.snackBar.open('Marcador agregado', 'Cerrar',{duration: 3000});
  }

  guardarLocalStorage(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }
  borrarMarcador(i:number){
    console.log(i);
    this.marcadores.splice(i,1);
    console.log(this.marcadores);
    this.guardarLocalStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
  }
  editarMarcador(marcador:Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });
    //recive información del dialog
    dialogRef.afterClosed().subscribe((result:Marcador) => {
      console.log('The dialog was closed');
      console.log(result);
      if ( isNullOrUndefined(result) ) {
        return;
      }
      marcador.titulo = result.titulo;
      marcador.desc = result.desc;
      this.guardarLocalStorage();
      this.snackBar.open('Marcador editado', 'Cerrar', {duration: 3000});
    });
}
  ngOnInit() {

  }

}

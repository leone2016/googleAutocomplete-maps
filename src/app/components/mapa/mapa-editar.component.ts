import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Marcador} from '../../classes/marcador.class';
@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma:FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marcador) {
    this.forma = formBuilder.group({
      'titulo':data.titulo,
      'desc':data.desc
    });
  }

  ngOnInit() {
  }

  guardarCambios(){
    // console.log(this.forma.value);
    this.onNoClick(this.forma.value);
  }
  onNoClick(data?:any):void{
    this.dialogRef.close(data);
  }

}

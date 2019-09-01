import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="Julian";
  arreglo=[0,1,2,3,4,5,6,7,8,9];
  PI=Math.PI;
  porcentaje=0.234;
  moneda=1234.5;

  heroe={
    nombre:"Bruno Diaz",
    clave:"Batman",
    edad:35,
    direccion:{
      calle:"50b",
      casa:32
    }
  }

  valorPromesa= new Promise( (resolve,reject)=>{
    setTimeout(()=>resolve('Llegaron mis datos'),3500);
  });

  fecha=new Date();

  nombreCompleto="JuLian CamILo LOpez GIraldo";
  video="hsXeFqj5p7Q";
  activar:boolean=true;
  contrasena:string="WattashigaKitta";
}


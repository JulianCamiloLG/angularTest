import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    frase:any;
    mostrar:boolean;
    personajes:string[];

    constructor(){
        this.mostrar=true;
        this.frase={
            mensaje:"Hola vanessa, ¿como estas?",
            autor: "Julian te dice:"
        }
        this.personajes=['Yo soy inevitable', 'Y yo soy aironman', 'Thanos','Te quiero 3000'];
    }

}
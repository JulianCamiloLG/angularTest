import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heroe-filter',
  templateUrl: './heroe-filter.component.html',
  styles: []
})
export class HeroeFilterComponent implements OnInit {

  @Input() heroes:Heroe[]=[];
  termino:string="";
  constructor( private _heroesService:HeroesService, private _router:Router, private _activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe( response => {
      this.heroes=this._heroesService.buscarHeroes(response['text']);
      this.termino=response['text'];
    });
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }
}

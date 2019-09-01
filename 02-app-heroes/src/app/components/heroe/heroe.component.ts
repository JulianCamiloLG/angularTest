import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any={};
  ismarvel:boolean=false;

  constructor( private _activatedRoute:ActivatedRoute, private _heroeService:HeroesService) {
    this._activatedRoute.params.subscribe( response => {
      this.heroe=this._heroeService.getHeroe(response['id']);
      if(this.heroe['casa']=='Marvel'){
        this.ismarvel=true;
      }
    });
   }

  ngOnInit() {
  }

}

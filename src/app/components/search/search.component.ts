import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../Services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroe: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router
            ) {

            }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.heroe = this._heroesService.buscarHeroes(params['termino']);
    } );
  }

  verHeroe(index: number){
    this.router.navigate(['/heroe', index]);
  }

}

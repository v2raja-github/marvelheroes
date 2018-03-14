import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes = new Array<Hero>();
  
    constructor(private route: ActivatedRoute, 
      private heroService: HeroService) {

      this.fetchHeros();
    }
  
      ngOnInit() {
        
      }
    
      fetchHeros() {
        this.heroService.fetchHeros().subscribe(data => {
          this.heroes = data;
          console.log(this.heroes);
        })
      }
  
  }
  
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';
import { Skills } from '../skills';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  //template: '<div>Hi</div>',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  private idx: number;
  private uuid: string;

  model = new Hero("","","","","","", new Skills(), new Array<string>());

  heroes = new Array<Hero>();

  //constructor() { }
  constructor(private route: ActivatedRoute, 
    private heroService: HeroService,
    private router: Router) {
  
  }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        alert("ngOnInit uuid:" + params.get('uuid'));
        //let i = Number(params.get('uuid'));
        this.uuid = params.get('uuid');
        this.fetchHero(this.uuid);
      });
      
    }
  
    fetchHero(uuid: string) {
      this.heroService.fetchHeros().subscribe(data => {
        this.heroes = data;
        //this.model = this.heroes[0];
        //console.log(this.heroes);

        this.heroes.forEach((hero, index) => {
          //console.log(hero);
          if (hero.uuid === this.uuid) {
            this.model = hero;
          }
        });
      })
    }

    onSubmit() {
      alert("onSubmit uuid:" + this.model.uuid);
      console.log(this.model);
      this.heroService.updateHero(this.model).subscribe(data => {
        alert(this.model.uuid + ": updated");
        //this.model = new Hero();
        //this.router.navigateByUrl('/heros/:uuid');
      });
      
    }
}

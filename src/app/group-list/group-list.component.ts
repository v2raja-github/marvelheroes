import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { Group } from '../group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  groups = new Array<Group>();
  
    constructor(private route: ActivatedRoute, private heroService: HeroService) {

      this.fetchGroups();
    }
  
      ngOnInit() {
        
      }
    
      fetchGroups() {
        this.heroService.fetchGroups().subscribe(data => {
          this.groups = data;
          console.log(this.groups);
        })
      }

}

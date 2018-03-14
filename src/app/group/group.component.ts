import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { Group } from '../group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  private uuid: string;

  model = new Group("", "", "", "","");
  
  groups = new Array<Group>();
  
  constructor(private route: ActivatedRoute, 
    private heroService: HeroService,
    private router: Router) {
  }

  @Input('group') group: Group;



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      alert("ngOnInit uuid:" + params.get('uuid'));
      //let i = Number(params.get('uuid'));
      this.uuid = params.get('uuid');
      this.fetchGroup(this.uuid);
    });
  }

  fetchGroup(uuid: string) {
    this.heroService.fetchGroups().subscribe(data => {
      this.groups = data;

      this.groups.forEach((group, index) => {
        //console.log(hero);
        if (group.uuid === this.uuid) {
          this.model = group;
        }
      });
    })
  }

  onSubmit() {
    if(this.model.uuid === "")
    {
      this.model.uuid = this.model.name.toLowerCase() + "11";
      alert('Group updated!');
    }
    this.heroService.updateGroup(this.model).subscribe(data => {
      alert(this.model.uuid + ": updated");
      //this.model = new Hero();
      //this.router.navigateByUrl('/heros/:uuid');
    });
    
  }
}

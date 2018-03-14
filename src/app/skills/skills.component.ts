import { Component, OnInit, Input, Output } from '@angular/core';
import { Skills } from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  @Input('skills') skills: Skills;

  ngOnInit() {
  }

}

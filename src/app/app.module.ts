import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { GroupComponent } from './group/group.component';
import { SkillsComponent } from './skills/skills.component';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list/hero-list.component';
import { GroupListComponent } from './group-list/group-list.component';
import { DummyComponent } from './dummy/dummy.component';

const appRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'heroes/:uuid', component: HeroComponent },
  { path: 'createHero', component: HeroComponent },
  { path: 'groups', component: GroupListComponent },
  { path: 'groups/:uuid', component: GroupComponent },
  { path: 'createGroup', component: GroupComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    GroupComponent,
    SkillsComponent,
    HeroListComponent,
    GroupListComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

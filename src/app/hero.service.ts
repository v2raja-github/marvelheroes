import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Hero } from './hero';
import { Group } from './group'

@Injectable()
export class HeroService {

amz_aws_uri_heroes = "https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes";
amz_aws_uri_groups = "https://3c52fab9ag.execute-api.us-east-1.amazonaws.com/dev/herogroups";

amz_aws_uri_proxy_heroes = "/api/heroes";
amz_aws_uri_proxy_groups = "/grpapi/herogroups";

constructor(private http: Http) { }

  public fetchHeros() : Observable<Hero[]> {
    return this.http.get(this.amz_aws_uri_heroes).map(res => res.json());
  }

  updateHero (hero: Hero): Observable<Hero>{
    let msg = JSON.stringify(hero);
    //console.log(msg);
    return this.http.post(this.amz_aws_uri_heroes, msg).map(res => res.json());
  }

  public fetchGroups() : Observable<Group[]> {
    return this.http.get(this.amz_aws_uri_groups).map(res => res.json());
  }

  updateGroup (group: Group): Observable<Group>{
    let msg = JSON.stringify(group);
    //console.log(msg);
    return this.http.post(this.amz_aws_uri_groups, msg).map(res => res.json());
  }
}

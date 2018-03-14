import { async, TestBed, inject } from '@angular/core/testing';
import {
  HttpModule, Http, Response, ResponseOptions
} from '@angular/http';

import { HeroService } from './hero.service';

describe('HeroService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        HeroService
      ]
    })
      .compileComponents();
  }));

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

});

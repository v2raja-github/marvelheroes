import { Skills } from "./skills";
import { Group } from "./group";

export class Hero {
  constructor(
    public uuid: string,
    public realName: string,
    public heroName: string,
    public s3ImageUrl: string,
    public powers: string,
    public signedAccords: string,
    public abilities: Skills,
    public groups: Array<string>
    //public groups: Array<Group>
  )  { }

  }
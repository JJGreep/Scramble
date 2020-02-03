export class Cuisine{

  public _cuisine_id: string;

  public _cuisine_name: string;

  constructor()

  constructor(cuisine_id?: string, cuisine_name?: string) {
    this._cuisine_id = cuisine_id;
    this._cuisine_name = cuisine_name;
  }

  get cuisine_id(): string {
    return this._cuisine_id;
  }

  set cuisine_id(value: string) {
    this._cuisine_id = value;
  }

  get cuisine_name(): string {
    return this._cuisine_name;
  }

  set cuisine_name(value: string) {
    this._cuisine_name = value;
  }
}

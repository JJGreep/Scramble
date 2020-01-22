export class Cuisine{

  public _cuisine_id: String;

  public _cuisine_name: String;

  constructor()

  constructor(cuisine_id?: String, cuisine_name?: String) {
    this._cuisine_id = cuisine_id;
    this._cuisine_name = cuisine_name;
  }

  get cuisine_id(): String {
    return this._cuisine_id;
  }

  set cuisine_id(value: String) {
    this._cuisine_id = value;
  }

  get cuisine_name(): String {
    return this._cuisine_name;
  }

  set cuisine_name(value: String) {
    this._cuisine_name = value;
  }
}

export class Restaurant {
  public _id: String;
  private _name: String;
  private _url: String;
  private _cuisines: String;
  private _price_range: Number;
  public _photo_url: String;

  constructor()

  constructor(id?:String, name?:String, url?:String, cuisines?:String, price_range?:Number, photo_url?:String){
    this._id = id;
    this._name = name;
    this._url = url;
    this._cuisines = cuisines;
    this._price_range = price_range;
    this._photo_url = photo_url;
  }


  get id(): String {
    return this._id;
  }

  set id(value: String) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get url(): String {
    return this._url;
  }

  set url(value: String) {
    this._url = value;
  }

  get cuisines(): String {
    return this._cuisines;
  }

  set cuisines(value: String) {
    this._cuisines = value;
  }

  get price_range(): Number {
    return this._price_range;
  }

  set price_range(value: Number) {
    this._price_range = value;
  }

  get photo_url(): String {
    return this._photo_url;
  }

  set photo_url(value: String) {
    this._photo_url = value;
  }

}

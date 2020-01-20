export class ResRestaurants {
    private _id: number;
    private _name: string;
    private _url: string;
    private _cuisines: string;
    private _priceRange: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get cuisines(): string {
    return this._cuisines;
  }

  set cuisines(value: string) {
    this._cuisines = value;
  }

  get priceRange(): number {
    return this._priceRange;
  }

  set priceRange(value: number) {
    this._priceRange = value;
  }

  //public ResRestaurant() {}

  public ResRestaurant(id: number, name: string, url: string, cuisines: string, priceRange: number) {
    this._id = id;
    this._name = name;
    this._url = url;
    this._cuisines = cuisines;
    this._priceRange = priceRange;
  }
}

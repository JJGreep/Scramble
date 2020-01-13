export class Filter{
  private _radius: number;
  private _cuisines: string;
  private _cityId: number;

  constructor()

  constructor(radius?: number, cuisines?: string, cityId?: number) {
    this._radius = radius;
    this._cuisines = cuisines;
    this._cityId = cityId;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }

  get cuisines(): string {
    return this._cuisines;
  }

  set cuisines(value: string) {
    this._cuisines = value;
  }

  get cityId(): number {
    return this._cityId;
  }

  set cityId(value: number) {
    this._cityId = value;
  }
}

export class FilterCheck{
  private _checked: boolean;
  private _cuisine: string;
  private _cuisineId: number;


  constructor(checked: boolean, cuisine: string, cuisineId: number) {
    this._checked = checked;
    this._cuisine = cuisine;
    this._cuisineId = cuisineId;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
  }

  get cuisine(): string {
    return this._cuisine;
  }

  set cuisine(value: string) {
    this._cuisine = value;
  }

  get cuisineId(): number {
    return this._cuisineId;
  }

  set cuisineId(value: number) {
    this._cuisineId = value;
  }

}

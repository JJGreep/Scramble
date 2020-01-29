export class Filter{
  public radius: number;
  public cuisines: string;
  public start: number;
  public count: number;
  public lat: number;
  public lon: number;


  constructor()

  constructor(radius?: number, cuisines?: string, start?: number, count?:number, lat?:number, lon?:number) {
    this.radius = radius;
    this.cuisines = cuisines;
    this.start = start;
    this.count = count;
    this.lat = lat;
    this.lon= lon;

  }
}

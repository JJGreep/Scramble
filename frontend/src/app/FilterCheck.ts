export class FilterCheck{
  public checked: boolean;
  public cuisine: string;
  public cuisineId: string;

  constructor()

  constructor(checked?: boolean, cuisine?: string, cuisineId?: string) {
    this.checked = checked;
    this.cuisine = cuisine;
    this.cuisineId = cuisineId;
  }

}

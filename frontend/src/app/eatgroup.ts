export class Eatgroup {

  public id : number;
  public name: string;
  public accounts: Account[];

  constructor()

  constructor(id?: number, name?: string, accounts?: []) {
    this.id = id;
    this.name = name;
    this.accounts = accounts;
  }
}

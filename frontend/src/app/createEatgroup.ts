export class CreateEatgroup {
  public name: string;
  public accounts: Array<Account> = [];

  constructor()

  constructor(name?: string, accounts?: Array<Account>) {
    this.name = name;
    this.accounts = accounts;
  }

}

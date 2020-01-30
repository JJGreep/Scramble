import {Eatgroup} from "./eatgroup";
import {Restaurant} from "./restaurant";

export class AccountTr {
  public id: number;
  public email: string;
  public userName: string;
  public eatGroups: Eatgroup[];
  public favourites: Restaurant[];
  public history: Restaurant[];

}

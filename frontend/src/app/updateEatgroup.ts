export class UpdateEatgroup {
  private _name: string;
  private _id: number;

  constructor()

  constructor(id?: number, name?: string) {
    this._id = id;
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}

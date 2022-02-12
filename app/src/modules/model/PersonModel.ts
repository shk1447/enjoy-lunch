import { extendObservable, observable } from 'mobx';

export class PersonModel {
  @observable
  public name!: string;

  constructor(data: any) {
    extendObservable(this, data);
  }
}

export default PersonModel;

import PersonModel from '../model/PersonModel';
import PersonRepository from '../repository/PersonRepository';
import {
  observable,
  computed,
  action,
  configure,
  makeAutoObservable,
} from 'mobx';

export class PersonStore {
  @observable list: PersonModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action addPerson = (name: string) => {
    PersonRepository.addPerson(name);
  };

  @action removePerson = (name: string) => {
    PersonRepository.removePerson(name);
  };

  @action getPersonList = async () => {
    const res = await PersonRepository.getPersonList();

    this.list = res.data;
  };
}

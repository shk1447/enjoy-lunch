import PersonModel from '../model/PersonModel';
import PersonRepository from '../repository/PersonRepository';
import {
  observable,
  computed,
  action,
  configure,
  makeAutoObservable,
} from 'mobx';

enum ExceptionCode {
  Du,
}

export class PersonStore {
  @observable list: PersonModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action addPerson = async (name: string) => {
    const { data } = await PersonRepository.addPerson(name);
    if (data.ok && data.result) {
      this.list.push(data.result);
    } else {
      alert('Error : ' + data.error);
    }
  };

  @action removePerson = async (person: PersonModel) => {
    const { data } = await PersonRepository.removePerson(person.name);

    if (data.ok) {
      this.list.splice(this.list.indexOf(person), 1);
    }
  };

  @action getPersonList = async () => {
    const { data } = await PersonRepository.getPersonList();

    if (data.ok && data.result) {
      this.list = data.result;
    }
  };
}

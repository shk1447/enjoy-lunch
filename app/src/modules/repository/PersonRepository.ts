import axios from 'axios';
import PersonModel from '../model/PersonModel';

export interface IResponse<T, R> {
  ok: boolean;
  result?: T;
  error?: R;
}

export class PersonRepository {
  baseURL = '/person';
  constructor() {
    console.log('test');
  }

  async getPersonList() {
    const response = await axios.get<IResponse<Array<PersonModel>, string>>(
      this.baseURL + '/list',
    );
    return response;
  }

  async addPerson(name: string) {
    const response = await axios.post<IResponse<PersonModel, string>>(
      this.baseURL + '/add',
      { name: name },
    );
    return response;
  }

  async removePerson(name: string) {
    const response = await axios.delete<IResponse<Array<PersonModel>, string>>(
      this.baseURL + '/remove/' + name,
    );
    return response;
  }
}

export default new PersonRepository();

import axios from 'axios';
import PersonModel from '../model/PersonModel';
export class PersonRepository {
  baseURL = '/person';
  constructor() {
    console.log('test');
  }

  async getPersonList() {
    const response = axios.get<Array<PersonModel>>(this.baseURL + '/list');
    return response;
  }

  async addPerson(name: string) {
    await axios.post(this.baseURL + '/add', { name: name });
  }

  async removePerson(name: string) {
    await axios.delete(this.baseURL + '/remove/' + name);
  }
}

export default new PersonRepository();

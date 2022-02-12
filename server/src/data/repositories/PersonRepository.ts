import { EntityRepository, Repository } from "typeorm";
import { PersonEntity } from "../entities/Person.entity";

@EntityRepository(PersonEntity)
export class PersonRepository extends Repository<PersonEntity> {
  constructor() {
    super();
  }
  async getPerson() {
    return await this.find();
  }

  async addPerson(name: string) {
    await this.save({ name: name });
  }

  async removePerson(name: string) {
    await this.delete({ name: name });
  }
}

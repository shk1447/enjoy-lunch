import { EntityRepository, Repository } from "typeorm";
import { PersonEntity } from "../entities/Person.entity";

@EntityRepository(PersonEntity)
export class PersonRepository extends Repository<PersonEntity> {
  constructor() {
    super();
  }
  async getPerson() {
    try {
      return {
        ok: true,
        result: await this.find(),
      };
    } catch (error) {
      return {
        ok: false,
        error: error.code,
      };
    }
  }

  async addPerson(name: string) {
    try {
      return {
        ok: true,
        result: await this.save({ name: name }),
      };
    } catch (error) {
      return {
        ok: false,
        error: error.code,
      };
    }
  }

  async removePerson(name: string) {
    try {
      return {
        ok: true,
        result: await this.delete({ name: name }),
      };
    } catch (error) {
      return {
        ok: false,
        error: error.code,
      };
    }
  }
}

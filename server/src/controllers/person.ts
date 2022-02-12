import { Get, Route, Post, Delete, Tags, Query, BodyProp } from "tsoa";

import { getCustomRepository } from "typeorm";
import { PersonDTO } from "../dto/Person.dto";
import { PersonRepository } from "../data/repositories/PersonRepository";

@Route("person")
@Tags("Person")
export default class PersonController {
  @Get("list")
  public async getPerson(): Promise<Array<PersonDTO>> {
    const repo = getCustomRepository(PersonRepository);

    return repo.getPerson();
  }
  @Post("add")
  public async addPerson(@BodyProp() name: string): Promise<PersonDTO> {
    const repo = getCustomRepository(PersonRepository);
    repo.addPerson(name);
    return { name: "test" };
  }
  @Delete("delete")
  public async deletePerson(@BodyProp() name: string): Promise<PersonDTO> {
    const repo = getCustomRepository(PersonRepository);
    repo.removePerson(name);
    return { name: "test" };
  }
}

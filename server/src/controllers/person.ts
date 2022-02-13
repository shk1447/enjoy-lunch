import { Get, Route, Post, Delete, Tags, Query, BodyProp } from "tsoa";

import { DeleteResult, getCustomRepository } from "typeorm";
import { PersonDTO } from "../dto/Person.dto";
import { PersonRepository } from "../data/repositories/PersonRepository";

import { TypeORMError } from "typeorm";

import { IResponse } from "../interfaces/BaseResponse";

@Route("person")
@Tags("Person")
export default class PersonController {
  @Get("list")
  public async getPerson(): Promise<IResponse<Array<PersonDTO>, TypeORMError>> {
    const repo = getCustomRepository(PersonRepository);

    return repo.getPerson();
  }
  @Post("add")
  public async addPerson(
    @BodyProp() name: string
  ): Promise<IResponse<PersonDTO, TypeORMError>> {
    const repo = getCustomRepository(PersonRepository);

    return repo.addPerson(name);
  }
  @Delete("delete")
  public async deletePerson(
    @BodyProp() name: string
  ): Promise<IResponse<DeleteResult, TypeORMError>> {
    const repo = getCustomRepository(PersonRepository);

    return repo.removePerson(name);
  }
}

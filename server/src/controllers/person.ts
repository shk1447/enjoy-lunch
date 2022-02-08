import { Get, Route, Post, Delete, Tags, Query, BodyProp } from "tsoa";

import { getRepository } from "typeorm";
import { IPerson, PersonEntity } from "../data/entities/person";

type a = {
  name: string;
};

@Route("person")
@Tags("Person")
export default class PersonController {
  @Get("list")
  public async getPerson(): Promise<Array<IPerson>> {
    const repo = getRepository<IPerson>(PersonEntity);
    const list = await repo.find();
    console.log(list);
    return list;
  }
  @Post("add")
  public async addPerson(@BodyProp() name: string): Promise<any> {
    const repo = getRepository<IPerson>(PersonEntity);
    await repo.save({ name: name });
    return {};
  }
  @Delete("delete")
  public async deletePerson(): Promise<any> {
    return {};
  }
}

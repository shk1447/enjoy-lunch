import { EntitySchema } from "typeorm";

export interface IPerson {
  idx: number;
  name: string;
}

export const PersonEntity = new EntitySchema<IPerson>({
  name: "people",
  columns: {
    idx: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
      unique: true,
    },
  },
});

export type ID = string;
// Небольшая заготовка , если появится необходимость записывать "время и дату" создания и обновления.
export interface IBasicFields {
  id: ID
  createdAt: string
  updatedAt: string
}

export type WithBasicFields<EntityShape> = IBasicFields & EntityShape;

export interface IModel<EntityShape extends Record<string, any>> {
  create: (data: EntityShape) => Promise<WithBasicFields<EntityShape>>;
  getList: () => Promise<WithBasicFields<EntityShape>[]>;
  getById: (id: ID) => Promise<WithBasicFields<EntityShape> | undefined | null>;
  updateById: (id: ID, data: EntityShape | WithBasicFields<EntityShape>) => Promise<WithBasicFields<EntityShape>>;
  deleteById: (id: ID, data: EntityShape | WithBasicFields<EntityShape>) => Promise<WithBasicFields<EntityShape>>;
}

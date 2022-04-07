import { all, one, create, destroy, update } from "./icoCinemaAssembler";

export const assembler = (url) => {
  const model = {};
  model.all = all(url);
  model.one = one(url);
  model.create = create(url);
  model.update = update(url);
  model.delete = destroy(url);
  return model;
};

import { assembler } from "./modelServiceAssembler";
import { all, destroy, one } from "./icoCinemaAssembler";

const URL = "genre";

const categoriesService = assembler(URL);
categoriesService.all = all(URL);
categoriesService.one = one(URL);
categoriesService.delete = destroy(URL)

export {
    categoriesService
};
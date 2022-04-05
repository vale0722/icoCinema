import { assembler } from "./modelServiceAssembler";
import {all, one} from "./icoCinemaAssembler";

const URL = 'genre'

const categoriesService = assembler(URL);
categoriesService.all = all(URL);

const categoryService = assembler(URL);
categoryService.one = one(URL)

export {
    categoriesService,
    categoryService
};
import { assembler } from "./modelServiceAssembler";
import { all, destroy, one } from "./icoCinemaAssembler";

const URL = "show";

const showsService = assembler(URL);
showsService.all = all(URL);
showsService.one = one(URL);
showsService.delete = destroy(URL)

export {
    showsService
};
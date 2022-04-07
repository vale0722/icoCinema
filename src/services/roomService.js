import { assembler } from "./modelServiceAssembler";
import { all, destroy, one } from "./icoCinemaAssembler";

const URL = "room";

const roomsService = assembler(URL);
roomsService.all = all(URL);
roomsService.one = one(URL);
roomsService.delete = destroy(URL)

export {
    roomsService
};
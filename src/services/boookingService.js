import { assembler } from "./modelServiceAssembler";
import { all, destroy, one } from "./icoCinemaAssembler";

const URL = "booking";

const bookingsService = assembler(URL);
bookingsService.all = all(URL);
bookingsService.one = one(URL);
bookingsService.delete = destroy(URL)

export {
    bookingsService
};
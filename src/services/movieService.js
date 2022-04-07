import { assembler } from "./modelServiceAssembler";
import { all, destroy, one } from "./icoCinemaAssembler";

const URL = "movie";

const moviesService = assembler(URL);
moviesService.all = all(URL);
moviesService.guest = all('guest/movies');
moviesService.one = one(URL);
moviesService.delete = destroy(URL);

export {
    moviesService
};
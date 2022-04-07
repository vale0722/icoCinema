import { assembler } from "./modelServiceAssembler";
import { all, service } from "./icoCinemaAssembler";

const URL = "user";

const login = () => (request) =>
  service.post("login", request).then((response) => response.data);
const register = () => (request, headers) =>
  service.post("register", request, headers).then((response) => response.data);
const logout = () => () =>
  service.post("logout").then((response) => response.data);

const userService = assembler(URL);
userService.all = all();
userService.login = login();
userService.register = register();
userService.logout = logout();

export { userService };

import { ListUsersUseCase } from "./listUsersUseCase";
import { ListUsersController } from "./listUsersController";

const listUsersUseCase = new ListUsersUseCase();
const listUsers = new ListUsersController(listUsersUseCase);

export { listUsers };
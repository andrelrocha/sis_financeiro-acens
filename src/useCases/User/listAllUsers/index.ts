import { ListAllUsersUseCase } from "./listAllUsersUseCase"
import { ListAllUsersController } from "./listAllUsersController"

const listAllUsersUseCase = new ListAllUsersUseCase();
const listAllUsers = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsers };
import { ListUserByIdUseCase } from "./listUserByIdUseCase";
import { ListUserByIdController } from "./listUserByIdController";

const listUserByIdUseCase = new ListUserByIdUseCase();
const listUserById = new ListUserByIdController(listUserByIdUseCase);

export { listUserById };
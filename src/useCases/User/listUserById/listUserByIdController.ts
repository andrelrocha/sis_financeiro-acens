import { NextFunction, Request, Response } from "express"; 

import { ListUserByIdUseCase } from "./listUserByIdUseCase";

class ListUserByIdController {

    constructor(private listUserById: ListUserByIdUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const  { id } = req.params;
            
            const user = await this.listUserById.execute(id);

            return res.status(200).send(user);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListUserByIdController };
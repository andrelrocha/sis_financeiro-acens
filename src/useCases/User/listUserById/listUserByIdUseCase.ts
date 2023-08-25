import e from "express";
import models from "../../../models";

class listUserByIdUseCase {
    async execute(id: string) {
        try {
            const user = await models.People.scope("all").findByPk(id, {
                paranoid: false
            });
    
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (err) {
            console.error(err);
            throw new Error(err.message);
        }
    }
}
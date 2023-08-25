import { Users } from "../../../models";

class ListUserByIdUseCase {
    async execute(id: string) {
        try {
            const user = await Users.scope("all").findByPk(id, {
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

export { ListUserByIdUseCase }
import { Users } from "../../../models";

class ListUsersUseCase {
  async execute(limit: number, page: number, order: any) {
    try {   
        const [field, orderType] = order.split(":");
            
            const users = await Users.findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType === "1" ? "ASC" : "DESC"]]
            });

            return users;
    } catch (err) {
        console.error("An error occurred while loading User's database:", err);
        throw err;
    }
  }
}

export { ListUsersUseCase };
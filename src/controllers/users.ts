import UserModel, { User } from "../models/user"

export default class UsersController {
  static async getUsers(): Promise<User[]> {
    return await UserModel.find()
  }

  static async getUser(username: string): Promise<User | null> {
    return await UserModel.findOne({ username })
  }

  static async createUser(username: string): Promise<User> {
    return await UserModel.create({ username })
  }
}

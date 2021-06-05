"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UsersController {
    static async getUsers() {
        return await user_1.default.find();
    }
    static async getUser(username) {
        return await user_1.default.findOne({ username });
    }
    static async createUser(username) {
        return await user_1.default.create({ username });
    }
}
exports.default = UsersController;

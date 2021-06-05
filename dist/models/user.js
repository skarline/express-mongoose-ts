"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const UserSchema = new mongoose_1.Schema({
    _id: { type: String, default: uuid_1.v4 },
    username: { type: String, required: true, unique: true }
});
exports.default = mongoose_1.model("User", UserSchema);

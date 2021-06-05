import { model, Schema, Document } from "mongoose"

import { v4 as uuidv4 } from "uuid"

export interface User extends Document {
  _id: string
  username: string
}

const UserSchema: Schema = new Schema({
  _id: { type: String, default: uuidv4 },
  username: { type: String, required: true, unique: true }
})

export default model<User>("User", UserSchema)

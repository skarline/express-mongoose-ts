import dotenv from "dotenv"

dotenv.config()

import express from "express"
import mongoose from "mongoose"

import config from "./config"

const app = express()

const PORT: number = config.app.port

import UserRoutes from "./routes/api/users"

app.use(express.json())

app.use("/api/users", UserRoutes)

app.listen(PORT, () => {
  console.clear()
  console.log(`Server running at http://localhost:${PORT}`)
})

const uri: string = config.db.host + "/" + config.db.name

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("[INFO] Successfully connected to mongoDB")
  })
  .catch((error) => {
    console.error("[ERROR] Failed to connect to mongoDB", error)
  })

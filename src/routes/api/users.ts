import express from "express"

import UsersController from "../../controllers/users"

const router = express.Router()

router.get("/", async (_req, res) => {
  res.send(await UsersController.getUsers())
})

router.get("/:username", async (req, res) => {
  res.send(await UsersController.getUser(req.params.username))
})

router.post("/", async (req, res) => {
  const { username } = req.body

  try {
    res.send(await UsersController.createUser(username))
  } catch (error) {
    res.send(error)
  }
})

export default router

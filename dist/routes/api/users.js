"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../../controllers/users"));
const router = express_1.default.Router();
router.get("/", async (_req, res) => {
    res.send(await users_1.default.getUsers());
});
router.get("/:username", async (req, res) => {
    res.send(await users_1.default.getUser(req.params.username));
});
router.post("/", async (req, res) => {
    const { username } = req.body;
    try {
        res.send(await users_1.default.createUser(username));
    }
    catch (error) {
        res.send(error);
    }
});
exports.default = router;

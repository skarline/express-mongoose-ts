"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const app = express_1.default();
const PORT = config_1.default.app.port;
const users_1 = __importDefault(require("./routes/api/users"));
app.use(express_1.default.json());
app.use("/api/users", users_1.default);
app.listen(PORT, () => {
    console.clear();
    console.log(`Server running at http://localhost:${PORT}`);
});
const uri = config_1.default.db.host + "/" + config_1.default.db.name;
mongoose_1.default
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("[INFO] Successfully connected to mongoDB");
})
    .catch((error) => {
    console.error("[ERROR] Failed to connect to mongoDB", error);
});

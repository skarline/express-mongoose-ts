"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    app: {
        port: 5000
    },
    db: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME
    }
};

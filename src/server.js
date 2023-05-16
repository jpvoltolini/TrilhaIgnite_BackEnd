"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const client_1 = require("@prisma/client");
const app = (0, fastify_1.default)();
const prisma = new client_1.PrismaClient();
app.get('/users', async () => {
    const users = await prisma.user.findMany;
    return users;
});
app
    .listen({
    port: 3333,
})
    .then(() => {
    console.log('🚀🚀 HTTP Server running on http://localhost:3333');
});

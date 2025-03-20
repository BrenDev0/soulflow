"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const options = {
    username: 'default',
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: 12573
    }
};
const redisClient = (0, redis_1.createClient)(options);
redisClient.on('connect', () => console.log('Connected to redis'));
redisClient.connect().catch(console.error);
exports.default = redisClient;

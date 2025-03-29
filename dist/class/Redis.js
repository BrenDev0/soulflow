"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
class Redis {
    constructor() {
        this.redisConnected = false;
    }
    static getInstance() {
        if (!Redis.instance) {
            Redis.instance = new Redis();
        }
        return Redis.instance;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.redisConnected) {
                    const redisClient = (0, redis_1.createClient)({
                        url: process.env.REDIS_URL,
                    });
                    redisClient.on('connect', () => console.log('Connected to redis'));
                    redisClient.connect().catch(console.error);
                    this.redisCLient = redisClient;
                    this.redisConnected = true;
                }
                return this.redisCLient;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getclient() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.redisConnected) {
                this.redisCLient = yield this.init();
            }
            return this.redisCLient;
        });
    }
}
const redisInstance = Redis.getInstance();
exports.default = redisInstance;

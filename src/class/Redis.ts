import { createClient, RedisClientType } from 'redis';

class Redis {
    private redisCLient: any;
    private redisConnected: boolean;
    private static instance: Redis;
    constructor() {
        this.redisConnected = false;
    }

    public static getInstance(): Redis {
        if (!Redis.instance) {
          Redis.instance = new Redis();
        }
        return Redis.instance;
    }

    async init() {
        try {
            if(!this.redisConnected) {
                
                const redisClient: RedisClientType = createClient({
                    url: process.env.REDIS_URL,
                  });
                
                redisClient.on('connect', () => console.log('Connected to redis'));
                redisClient.connect().catch(console.error);
                this.redisCLient = redisClient;
                this.redisConnected = true;
            }

            return this.redisCLient;
       } catch (error) {
           throw error;
       }
    }

    async getclient() {
        if(!this.redisConnected) {
            this.redisCLient = await this.init();
        }

        return this.redisCLient;
    }
}

const redisInstance = Redis.getInstance()
export default redisInstance;
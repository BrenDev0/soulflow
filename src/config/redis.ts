import { createClient, RedisClientType } from 'redis';


const options = {
    username: 'default',
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: 12573
    }
}

const redisClient: RedisClientType = createClient(options);

redisClient.on('connect', () => console.log('Connected to redis'));
redisClient.connect().catch(console.error);

export default redisClient;

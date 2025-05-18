import { Redis } from "ioredis";

require( 'dotenv' ).config();

const redisClient =()=>{
    if(process.env.Redis_URL){
        console.log("redis connected")
    }
    throw new Error ("Redis connection failed")
}

export default redisClient;

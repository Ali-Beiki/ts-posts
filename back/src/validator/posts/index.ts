import { upsertPostSchema } from "../../db/schema/post.ts"

export const postValidatro ={
    upsert:<T>(body:T)=>{
        return upsertPostSchema.parse(body)
    }
}
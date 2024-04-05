import type { Comment } from "@prisma/client";
import {db} from "@/db"


export type CommentWithAuthor  = Comment & { 
    user: {
        name: string | null;
        image: string | null;
    }
}

export function fetchCommentsById(postId:string): Promise<CommentWithAuthor[]> {
    
    console.log("POSTID: ", postId)

    return db.comment.findMany({
        where: {postId}, 
        include: {
            user: {
                select: {
                    name:true, 
                    image: true
                }
            }
        }
    })
}
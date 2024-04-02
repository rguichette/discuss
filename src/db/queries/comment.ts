import type { Comment } from "@prisma/client";
import {db} from "@/db"


export type CommentWithAuthor  = Comment & { 
    user: {
        name: string | null;
        image: string|null;
    }
}
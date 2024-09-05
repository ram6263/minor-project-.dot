import mongoose, {Schema} from "mongoose";

const commentSchema = new Schema(
    {
        text : {
            type : String,
            required : true
        },
        projectId : {
            type : Schema.Types.ObjectId,
            ref : "Project",
            required : true
        },
        user : {
            type : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        likes : [
            {
                type : Schema.Types.ObjectId,
                ref : "User"
            }
        ],
        replies : [
            {
                type : Schema.Types.ObjectId,
                ref : "Comment"
            }
        ]
    },
    {
        timestamps:true
    }
)

export const Comment = mongoose.model("Comment", commentSchema)
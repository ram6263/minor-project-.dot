import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"

// yha res use nhi ho ra hai to usko _ type krke likh skte hai
export const verifyJWT = asyncHandler(async(req, _, next) => {

    try {
        
        // this is for testing purpuse only
        // const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4NzhmM2EyZjA4NjcxNDE5Y2RmMzMiLCJlbWFpbCI6InByaW5jZUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InByaW5jZTE4MDEiLCJmdWxsbmFtZSI6IlByaW5jZSBSYWdodXdhbnNoaSIsImlhdCI6MTcwNzYzOTUwMywiZXhwIjoxNzA3NzI1OTAzfQ.sVDg5xcA4CKBu-ubA04UtkcKRSZ4a7cTmLYwH7Z0dPI";

        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        // const token = req.header("Authorization");
        console.log("Token : ", token)
        if(!token){
            throw new ApiError(401, "Unauthorized request");
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Unauthorized access")
    }
})
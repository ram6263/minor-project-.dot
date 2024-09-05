import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"

const cookieOptions = {
    httpOnly : true,
    secure : true
}


const generateAccessAndRefreshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating acess and refresh token");
    }
}

const registerUser = asyncHandler( async (req, res) => {
    // steps to register user
    // get user details from frontend
    // validation - not empty
    // check if user already exist : username and email
    // check for images, check for avatar
    // upload them to cloudinary, check avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const {fullname, email, username, password} = req.body;
    // console.log("email : ", email);

    // we can handle it separately also
    if(
        [fullname, email, username, password].some((field)=> field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    // console.log("Fullname : ", fullname)
    // console.log("Email : ", email)
    // console.log("Password : ", password)
    // console.log("Username : ", username)

    const existedUser = await User.findOne({
        $or : [{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(409, "User with email or username already exist")
    }
    const nameParts = fullname.trim().split(/\s+/);

    // Extract the first and last elements
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    // here we doesn't required avatar as required field

    // const avatarLocalPath = req.files?.avatar[0]?.path;
    // console.log(req.files)
    // if(!avatarLocalPath){
    //     throw new ApiError(400, "Avatar is required")
    // }

    // const avatar = await uploadOnCloudinary(avatarLocalPath);

    // if(!avatar){
    //     throw new ApiError(400, "Avatar is required")
    // }

    // we use api to generate avatar
    const avatar = `https://ui-avatars.com/api/?name=${firstName}+${lastName}`;
    
    const user = await User.create({
        fullname : fullname,
        email : email,
        username : username.toLowerCase(),
        password : password,
        avatar : avatar
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );
    
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }
    // console.log("Created User : ", createdUser)
    return res.status(200).json(
        new ApiResponse(
            200, // status code
            {
                user : createdUser
            }, // data
            "User registered successfully" //message
        )
    )
})

const loginUser = asyncHandler(async (req, res) => {

    // steps to login user
    // get user details from frontend
    // validation - not empty
    // find the user
    // password check
    // access and refresh token update
    // send cookie

    // console.log("request : ", req)
    const {email, username, password} = req.body;
    
    if((email === "" && username === "") || password === ""){
       throw new ApiResponse(404, "All fields required")
    }
    // console.log("email : ", email)
    // console.log("password : ", password)
    const user = await User.findOne({
        $or : [{username}, {email}]
    })
    // console.log(user)
    if(!user){
        throw new ApiError(404, "User doesn't exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid password")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken").populate("projects");

    return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
        new ApiResponse(
            200,
            {
                user : loggedInUser, accessToken, refreshToken
            },
            "User logged in successfully"
        )
    )
})

const logoutUser = asyncHandler(async(req, res) => {
    // delete the cookies
    // remove the accessToken, refreshToken

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set : {
                refreshToken : undefined
            }
        },
        {
            new : true
        }
    );

    return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(
        new ApiResponse(
            200,
            {},
            "User logged out successfully"
        )
    )

})

const refreshAccessToken = asyncHandler(async(req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken, 
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if(incomingRefreshToken !== user.refreshToken){
            throw new ApiError(401, "Refresh token is expired or used")
        }
    
        const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        return res
        .status(200)
        .cookie("acessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(
            new ApiResponse(
                200,
                {accessToken, refreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})

const changeCurrentPassword = asyncHandler(async(req, res)=>{
    const {oldPassword, newPassword} = req.body;

    const user =await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if(!isPasswordCorrect){
        throw new ApiError(404, "Invalid old password")
    }

    user.password = newPassword
    await user.save({validateBeforeSave:false})

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {},
            "Password changed successfully"
        )
    )
})

const getCurrentUser = asyncHandler(async(req, res) =>{
    
    const user = await User.findById(
        req.user?._id
        ).select("-password -refreshToken").populate("projects")
    console.log("User : ", user)
   
    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {user},
            "Current user fetched successfully"
        )
    )
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {fullname} = req.body;
    if(!fullname){
        throw new ApiError(400, "Enter full name")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set : {
                fullname : fullname
            }
        },
        {
            new : true
        }
    ).select("-password -refreshToken")

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            user,
            "Account details updated"
        )
    )
})

const updateUserAvatar = asyncHandler(async(req, res) => {
    const avatarLocalPath = req.file?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is missing")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if(!avatar.url){
        throw new ApiError(500, "Error while uploading avatar")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id, 
        {
            $set :{
                avatar : avatar.url
            }
        },
        {
            new : true
        }
    ).select("-password -refreshToken")

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            user,
            "Avatar updated successfully"
        )
    )
})


export {
    registerUser,
    loginUser, 
    logoutUser, 
    refreshAccessToken, 
    getCurrentUser,
    changeCurrentPassword,
    updateAccountDetails,
    updateUserAvatar,
}
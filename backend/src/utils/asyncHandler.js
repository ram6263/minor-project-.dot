
// const asyncHandler = (fn)=>{()=>{}}

// const asyncHandler = (func) => () => {} // short form of previous one

// this is the version using try catch 
// const asyncHandler = (func) => async (req, res, next) => {
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
// } 

// this version is by using promises

const asyncHandler = (requestHandler) =>{
    return (req, res, next) => {
        Promise.resolve(
            requestHandler(req, res, next)
        ).catch((err) => next(err));
    }
}

export {asyncHandler}
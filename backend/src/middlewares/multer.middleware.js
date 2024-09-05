import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("Req : ", req)
      console.log("Multer file : ", file)
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      console.log("Req : ", req)
      console.log("Multer file : ", file)
      cb(null, file.originalname)
    }
})
  
export  const upload = multer({ 
    storage: storage 
})
const multer = require("multer");

// storage config
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./Uploads")
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
});


// filter
const filefilter = (req,file,callback)=>{
    if(file.mimetype === "image/png" ||file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("Only png jpg and Jpeg formatted allowed"))
    }
}

const userUpload = multer({
    storage:storage,
    fileFilter:filefilter
});

module.exports = userUpload;
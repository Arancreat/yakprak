import multer, { diskStorage } from "multer";
import { extname } from "path";

const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, "storage");
    },
    filename: (req, file, cb) => {
        return cb(null, Date.now() + extname(file.originalname));
    },
});

export const uploadSingleImage = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 4,
    },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        } else {
            return cb(new Error("Invalid mime type"));
        }
    },
}).single("image");

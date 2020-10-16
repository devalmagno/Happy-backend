import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uplouds'),
        filename: (req, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`

            cb(null, fileName);
        }
    })
}
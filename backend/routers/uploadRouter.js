import multer from 'multer';
import express from 'express';
import { isAuth } from '../utils.js';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');  // cb = callback, the error is null (no error) 
                               // the folder that we're going to save the file
                               // we put there 1 empty file so it will get into the git repository.
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}.jpg`);  // the second parameter is the name of file
    }
});

// upload middleware
const upload = multer({storage});

uploadRouter.post('/', isAuth, upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
});

export default uploadRouter;
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config();

const app = express();
// setting middleware for that all data in body will be translated to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true  }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://admin-erez:joker123@cluster0.99svl.mongodb.net/amazona?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Sending static data:
// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });

// Sending data from the mongo db:
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID_LIVE || 'sb'); // sb means sandbox
});

// Display The images from /uploads :
const __dirname = path.resolve(); // return the current folder
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); // point to the /uploads folder

// serve files inside build folder and all files by index.html.
app.use(express.static(path.join(__dirname, '/frontend/build')));
// root should point the build version of react, not showing message 'Server is ready'
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

// for development only:
// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// To show errors:
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
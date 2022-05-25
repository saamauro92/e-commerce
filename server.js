import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './routers/routes.js';


var corsOptions = {
  origin: "http://localhost:5001"
};


dotenv.config();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

routes(app);

mongoose.connect(process.env.MONGODB_URL, {

  useUnifiedTopology: true,

})



app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send("Server is ready", process.env.MONGODB_URL);
});



app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
})


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));


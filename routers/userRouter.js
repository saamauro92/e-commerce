import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.get('/seed'
    ,
    expressAsyncHandler(async (req, res) => {
        //await User.remove({});
        const createdUsers = await User.insertMany(data.users);

        res.send({ createdUsers });

    }));


userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;

        }
    }

    res.status(401).send({message: "Invalid user email or password"})
}))

export default userRouter;
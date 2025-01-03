import express from 'express';
import router from './router';
import morgan from 'morgan'
import cors from 'cors'
import{protect} from './auth'
import { createNewUSer, signin } from './user';

const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use((req,res,next) => {
//     res.json({message:'message'})
// })

app.get('/', (req, res) => {
    console.log('hello from express');
    res.status(200);
    res.json({ message: 'my name is Princewill' }); // Added closing parenthesis here
});

app.use('/api',protect, router);
app.post('/user', createNewUSer)
app.post('/signin',signin )


export default app;
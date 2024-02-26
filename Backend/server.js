import express from 'express'
import cors from 'cors'

const app = express();

const port = process.env.PORT || 5000;
app.use(cors())
app.get('/api/jokes',(req,res)=>{
     const jokes = [
        {
            id:1,
            title:'A joke',
            content :"this is content 1"
        },
        {
            id:2,
            title:'A new joke',
            content :"this is content 2"
        },
        {
            id:3,
            title:'A third joke',
            content :"this is content 1"
        }


     ]

     res.send(jokes)
})
app.listen(port,()=>{
    console.log(`server is listening`);
})
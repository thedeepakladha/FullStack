import express from 'express'

const app = express();

const port = process.env.PORT || 5000;

app.get('/jokes',(req,res)=>{
     const jokes = [
        {
            id:1,
            title:'A joke'
        },
        {
            id:2,
            title:'A new joke'
        },
        {
            id:3,
            title:'A third joke'
        }


     ]

     res.send(jokes)
})
app.listen(port,()=>{
    console.log(`server is listening`);
})
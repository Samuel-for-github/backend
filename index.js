import express from 'express';


const app = express();
const port = process.env.PORT || 3000

app.get("/", (req, res)=>{
    res.send("Api")
})

app.get("/api", (req, res)=>{
 const intro = {
    name: "Samuel fernandes"
 }
 res.send( intro)
})

app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
})
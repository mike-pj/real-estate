import express from 'express';
import dotenv from 'dotenv';
// import 'dotenv'.'Config();

const app = express();


const port = process.env.PORT

app.listen(4000, () => {
    console.log("Server listening on port 4000")
})
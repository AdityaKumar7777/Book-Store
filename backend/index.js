import express from "express";
import { PORT, DBPASSWORD, DBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';
const app = express();
//Middleware for parsing req body


app.use(express.json());
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To The Server");
});
//Route save a new book


app.use(cors());
//custom orgin
// app.use(cors({
//   origin:'https://localhost:5555',
//   methods:['GET','POST','PUT','DELETE'],
//   allowedHeaders:['Content-Type']
// }))

app.use("/books", booksRoute);
mongoose
  .connect(DBURL)
  .then(() => {
    console.log("app is connected to db");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

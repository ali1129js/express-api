import express from "express";
import cors from "cors";
import router from "./routes/applicants.js";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.port || 5000;

//Middlewares
// without bodyparser the req.body will return undefined
app.use(bodyParser.json());
// use the router for the path /applicants
app.use("/applicants", router);
//app.use('ROUTE HERE', function excute every time we hit that route)

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log(req.url);
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

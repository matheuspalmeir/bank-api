import express from "express";
import digitalBank from "./routes/digitalBank.js";

const app = express();

app.use(express.json());

app.use("/bank", digitalBank);

app.listen(3000, () => {
  console.log("API is started at port 3000");
});

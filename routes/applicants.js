import express from "express";
import { data } from "../data/data.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
  res.send(data);
});
export default router;

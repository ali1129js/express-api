import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
  res.send("Applicants Page");
});
export default router;

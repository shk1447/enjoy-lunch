import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("index", { title: "Enjoy Lunch" });
});

export default router;

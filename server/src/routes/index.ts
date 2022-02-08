import express from "express";

import PersonController from "../controllers/person";

const router = express.Router();

router.get("/person/list", async (req, res, next) => {
  const controller = new PersonController();
  const ret = await controller.getPerson();
  res.status(200).send(ret);
});

router.post("/person/add", async (req, res, next) => {
  const controller = new PersonController();
  controller.addPerson(req.body.name);
  return res.send("Test");
});

router.delete("/person/delete", async (req, res, next) => {
  const controller = new PersonController();

  return res.send("Test");
});

export default router;

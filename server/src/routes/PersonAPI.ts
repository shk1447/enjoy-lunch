import express from "express";

const router = express.Router();

import PersonController from "../controllers/person";

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

router.delete("/person/remove/:name", async (req, res, next) => {
  const controller = new PersonController();
  await controller.deletePerson(req.params.name);
  return res.send("Test");
});

export default router;

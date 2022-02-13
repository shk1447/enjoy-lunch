import express from "express";

const router = express.Router();

import PersonController from "../controllers/person";

router.get("/person/list", async (req, res, next) => {
  const controller = new PersonController();
  try {
    const ret = await controller.getPerson();
    res.status(200).send(ret);
  } catch (error) {
    res.status(200).send({ ok: false });
  }
});

router.post("/person/add", async (req, res, next) => {
  const controller = new PersonController();
  try {
    const ret = await controller.addPerson(req.body.name);
    res.status(200).send(ret);
  } catch (error) {
    res.status(200).send({ ok: false });
  }
});

router.delete("/person/remove/:name", async (req, res, next) => {
  const controller = new PersonController();
  try {
    const ret = await controller.deletePerson(req.params.name);
    res.status(200).send(ret);
  } catch (error) {
    res.status(200).send({ ok: false });
  }
});

export default router;

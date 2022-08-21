import { Router } from "express";

import {
  getAllJobs,
  getAJob,
  editJob,
  deleteJob,
  createJob,
} from "../controllers/jobs.controller.js";

const jobRouter = Router();

jobRouter.route("/").post(createJob).get(getAllJobs);
jobRouter.route("/:id").get(getAJob).delete(deleteJob).patch(editJob);

export default jobRouter;

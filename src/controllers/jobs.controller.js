import Job from "../models/job.mongo.js";

import { StatusCodes } from "http-status-codes";

import BadRequestError from "../errors/badRequest.js";
import NotFoundError from "../errors/notFound.js";

export const getAllJobs = async (req, res) => {
  const userId = req.user.userId;
  const getJobs = await Job.find(
    { createdBy: userId },
    { _id: 0, __v: 0 }
  ).sort("createdAt");

  res.status(StatusCodes.OK).json({ count: getJobs.length, getJobs });
};

// Get A Job
export const getAJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) throw new NotFoundError(`No job with id ${jobId}`);

  res.status(StatusCodes.CREATED).json(job);
};

// Edit Job
export const editJob = async (req, res) => {
  const {
    body: { position },
    user: { userId },
    params: { id: jobId },
  } = req;

  if (position === "")
    throw new BadRequestError("Position field cannot be empty");
  const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!job) throw new NotFoundError(`No job with id ${jobId}`);
  res.status(StatusCodes.OK).json(job);
};

export const deleteJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findByIdAndDelete({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) throw new NotFoundError(`No job with id ${jobId}`);

  res.status(StatusCodes.OK).json({ msg: `${jobId} deleted` });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

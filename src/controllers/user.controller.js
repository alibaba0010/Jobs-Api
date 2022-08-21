import { StatusCodes } from "http-status-codes";

import User from "../models/user.mongo.js";

import BadRequestError from "../errors/badRequest.js";
import UnAuthenticatedError from "../errors/unaunthenticated.js";



export const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  res
    .status(StatusCodes.CREATED)
    .json({ username: user.username, email: user.email });
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new BadRequestError("Provide a username and password");

  const user = await User.findOne({ username });
  if (!user) throw new UnAuthenticatedError("Invalid Credentials");

  const checkPassword = await user.comparePassword(password);
  if (!checkPassword) throw new UnAuthenticatedError("Invalid Password");
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ username: user.username, token });
};

export const editUser = async (req, res) => {

};

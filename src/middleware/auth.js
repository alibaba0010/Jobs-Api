import jwt from "jsonwebtoken";

import UnauthenticatedError from "../errors/unaunthenticated.js";

export const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Provide an authentic token");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SEC);

    // attach the user to the job routes
    // console.log(`${JSON.stringify(decode)} revealed`);

    req.user = { userId: decode.userId, username: decode.username };
    next();
  } catch (err) {
    console.log(err);
    throw new UnauthenticatedError("Unable to authorize access");
  }
};

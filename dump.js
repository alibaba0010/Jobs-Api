/* from user.controller.js    */

// Validating register in the controller
// const {username, email, password} = req.body;
// if (!name || !email || !password) throw new BadRequestError("Bad Request");

// const salt = bcrypt.genSalt(10)
// const hashedPassword = await bcrypt.hash(password, salt)
// const newUser = {username, email, password: hashedPassword}
// res.status(StatusCodes.CREATED).json({ newUser });

// const token = jwt.sign({userId: user._id, name: user.username}, process.env.JWT_SECRET, {expiresIn: "3d"})

/* from auth.js in task 05*/

// export const authenticationMiddleware = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     throw new UnauthenticatedError("Provide an authentic token");
//   }
//   const token = authHeader.split(" ")[1];
//   try {
//     const decode = jwt.verify(token, process.env.JWT_SEC);
//     req.user = decode.username;
//     next();
//   } catch (err) {
//     console.log(err);
//     throw new UnauthenticatedError("Unable to authorize access", );
//   }
// };

/* Some can use this code in their authentication after verifying their token*/
// const user = User.findById(decode.id).select('-password') // select to remove the password
// req.user = user

/* to get the required prop in the next fn */
// req.user.userId or req.user.isAdmin

// {"userId":"62fa95a279bc9082740d1bfc","username":"johnthebaptist","iat":1660589483,"exp":1660848683} revealed ===

//   // console.log(`${JSON.stringify(req.user)} controller`);

/* const userId = req.user.userId === const {user: {userId}} = req */

/* to update only password we destructure it in the req.body */
// const { password } = req.body;

/* from error.js used initially */
// if (err instanceof ErrorHandler) {
//   console.log(err.message);
//   return await res.status(err.statusCode).json({ msg: err.messsge });
// }
// return res
//   .status(StatusCodes.INTERNAL_SERVER_ERROR)
//   .json({ error: `Something!!! went wrong, try again later ${err}` });({err}) was used

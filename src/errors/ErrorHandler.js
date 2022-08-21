class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// export const createCustomError = (msg, statusCode) => {
//   console.log(`${msg} with ${statusCode} in error Handler`)
//   return new ErrorHandler(msg, statusCode);
// };

export { ErrorHandler as default };

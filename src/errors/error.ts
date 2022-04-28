import { Response } from 'express';

class ErrorHandler {
  public status: number;

  public message: unknown;

  constructor(status: number, message: unknown) {
    this.status = status;
    this.message = message;
  }
}

const handleError = (err: unknown, res: Response) => {
  if (err instanceof ErrorHandler) {
    const { status, message } = err;

    console.log(status, message);

    return res.status(status).json({ error: message });
  }

  return res.status(400).json(err);
};

export { ErrorHandler, handleError };

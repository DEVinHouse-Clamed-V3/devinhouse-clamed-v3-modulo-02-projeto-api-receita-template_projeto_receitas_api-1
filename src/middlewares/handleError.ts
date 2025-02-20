import { NextFunction, Request, Response } from "express";

export const handleError = (error: any, request: Request, response: Response, next: NextFunction) => {
  const statusCode = error.statusCode || 500; // Default to 500 if statusCode is not defined
  response.status(statusCode).json({ error: error.message });
};
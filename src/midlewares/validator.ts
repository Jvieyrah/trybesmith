import { Request, Response, NextFunction } from 'express';
// import Joi from 'joi';

const fourHundred = 400;

export default function validateLogin(req : Request, res : Response, next : NextFunction) {
  const { username, password } = req.body;
  if (!username) {
    return res.status(fourHundred).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(fourHundred).json({ message: '"password" is required' });
  }
  next();   
}
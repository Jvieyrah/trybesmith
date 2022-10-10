import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
// import Product from '../interfaces/product.interface';

const fourHundred = 400;
const fourTwenty2 = 422;
function validateLogin(req : Request, res : Response, next : NextFunction) {
  const { username, password } = req.body;
  if (!username) {
    return res.status(fourHundred).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(fourHundred).json({ message: '"password" is required' });
  }
  next();   
}

function validateProduct(req : Request, res : Response, next : NextFunction) {
  const { name, amount } = req.body;
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    amount: Joi.string().required().min(3),
  });
  const { error } = schema.validate({ name, amount });
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(',');
    let statusCode = fourTwenty2;
    if (message.includes('required')) {
      statusCode = fourHundred;
    }
    // console.log('error', message);
    return res.status(statusCode).json({ message: error.message });
  }
  next();
}

function validateUser(req : Request, res : Response, next : NextFunction) {
  const { username, classe, level, password } = req.body;
  const schema = Joi.object({
    username: Joi.string().required().min(3),
    classe: Joi.string().required().min(3),
    level: Joi.number().required().min(1),
    password: Joi.string().required().min(8),
  });
  const { error } = schema.validate({ username, classe, level, password });
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(',');
    let statusCode = fourTwenty2;
    if (message.includes('required')) {
      statusCode = fourHundred;
    }
    // console.log('error', message);
    return res.status(statusCode).json({ message: error.message });
  }
  next();
}

export default class Validator {
  public static vLogin(req : Request, res : Response, next : NextFunction) {
    return validateLogin(req, res, next);
  }

  public static vProduct(req : Request, res : Response, next : NextFunction) {
    return validateProduct(req, res, next);
  }

  public static vUser(req : Request, res : Response, next : NextFunction) {
    return validateUser(req, res, next);
  }
}
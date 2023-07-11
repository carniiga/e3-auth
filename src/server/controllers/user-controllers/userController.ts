import { Request, Response, NextFunction } from "express";
import { createUser } from "../../../logic/user/createUser";
import dotenv, { parse } from "dotenv";
import { validatePass } from "../../../logic/user/validateUser";
import jwt, { verify } from "jsonwebtoken";
import { validate } from "../../../logic/user/validateToken";

export const createUserCtrl = async (req: Request, res: Response) => {
  const userInput = req.body;
  const create = await createUser(userInput);
  const text = {
    mensaje: "felicitaciones tu cuenta ha sido creada",
  };
  res.send(`${text.mensaje}`).json();
};

export const loginUserCtrl = async (req: Request, res: Response) => {
  const { password, name } = req.body;
  const validate = await validatePass(name, password);
  const text = {
    access_token: `${validate}`,
  };
  res.send(text).json();
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headerToken = req.headers.authorization;
  if (headerToken) {
    const token = headerToken.slice(7, headerToken.length).toString();
    try {
      const validateToken = await validate(token);
      if (validateToken) {
        return next();
      }
    } catch (error : any) {
        return res.send(error.message)
    }
  }
};

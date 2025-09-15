import { Request } from "express";

export interface AuthRequest extends Request {
  user_id?: string; // adiciona o user_id que vem do token
}
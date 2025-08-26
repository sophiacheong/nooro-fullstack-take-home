import { ZodType, ZodError, z } from "zod";
import { Request, Response, NextFunction } from "express";

interface ValidationSchemas {
  body?: ZodType<any>;
  params?: ZodType<any>;
  query?: ZodType<any>;
}

export const validate = (schemas: ValidationSchemas) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.body) {
        req.body = schemas.body.parse(req.body);
      }
      if (schemas.params) {
        req.params = schemas.params.parse(req.params);
      }
      if (schemas.query) {
        req.query = schemas.query.parse(req.query);
      }
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          error: "Validation failed",
          errors: z.treeifyError(err),
        });
      }
      next(err);
    }
  };
};

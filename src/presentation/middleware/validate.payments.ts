import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const postPreferenceValidation = [
    check('items.*.quantity').toInt().isInt(),
    check('items.*.unit_price').toFloat().isFloat(),
    check('items.*.title').isString(),
    check('items.*.description').isString(),
    (req:Request, res:Response, next:NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]
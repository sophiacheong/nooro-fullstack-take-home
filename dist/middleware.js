"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const validate = (schemas) => {
    return (req, res, next) => {
        try {
            if (schemas.body) {
                schemas.body.parse(req.body);
            }
            if (schemas.params) {
                schemas.params.parse(req.params);
            }
            if (schemas.query) {
                schemas.query.parse(req.query);
            }
            next();
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                return res.status(400).json({
                    error: "Validation failed",
                    errors: zod_1.z.treeifyError(err),
                });
            }
            next(err);
        }
    };
};
exports.validate = validate;

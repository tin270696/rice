import { Request, Response } from "express";

// [GET] /products
export const index = async (req: Request, res: Response) => {
    res.render("client/pages/products/index");
}

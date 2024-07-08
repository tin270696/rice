import { Express } from "express";
import { productRoutes } from "./product";

const clientRoutes = (app: Express) => {
    app.use("/products", productRoutes);
}

export default clientRoutes;
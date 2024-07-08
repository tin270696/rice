import { Router } from "express";
import * as controller from "../../controllers/client/product";

const router: Router = Router();

router.get("/", controller.index);

export const productRoutes: Router = router;
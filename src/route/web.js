import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get("/", homeController.getHomepage)
    router.get("/detail/user/:userId", homeController.getDetailPage)
    router.post("/createUser", homeController.createNewUser)
    router.post("/deleteUser/:id", homeController.deleteUser)
    router.get("/editUser/:userId", homeController.getEditPage)
    router.post("/updateUser", homeController.updateUser)
    return app.use("/", router);
}

export default initWebRoute;
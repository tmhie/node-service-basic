import express from 'express';
import apiController from '../controller/apiController.js'

let router = express.Router();

const initApi = (app) => {
    router.get("/", apiController.getAllPage)
    router.get("/detailUser/:userId", apiController.getDetailUser)
    router.post("/createUser", apiController.createUser)
    router.delete("/deleteUser/:userId", apiController.deleteUser)
    router.put("/updateUser", apiController.updateUser)
    return app.use("/api/v1", router);
}

export default initApi; 
const express = require("express");
const UserController = require("../controllers/workplace");

const md_auth = require("../middleware/authenticated");

const api = express.Router();


api.post("/sign-up-wplace", UserController.signUpWorkplace);

api.get("/workplace", [md_auth.ensureAuth], UserController.getWorkplaces);
api.get("/workplace-active", [md_auth.ensureAuth], UserController.getWorkplacesActive);
api.put("/update-workplace/:id", [md_auth.ensureAuth], UserController.updateWorkplace);
api.put("/activate-workplace/:id", [md_auth.ensureAuth], UserController.activateWorkplace);
api.delete("/delete-workplace/:id", [md_auth.ensureAuth], UserController.deleteWorkplace);
api.post("/sign-up-workplace", [md_auth.ensureAuth], UserController.signUpWorkplace);

module.exports = api;
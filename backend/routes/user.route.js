import express from "express";
import {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/add", addUser);

router.get("/getuser/:id", getUser);

router.put("/updateuser/:id", updateUser);

router.delete("/deleteuser/:id", deleteUser);

export default router;

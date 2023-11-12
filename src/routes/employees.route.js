import express from "express";
import { createEmployee, deleteEmployee, getEmployees, getSingleEmployee, updateEmployee } from "../controllers/employees.controller.js";
const router = express.Router();

router.get("/", getEmployees);
router.get("/:id", getSingleEmployee);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
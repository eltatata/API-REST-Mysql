import express from "express";
import { pool } from "../database/db.js";
const router = express.Router();

router.get("/ping", async (req, res) => {
    const [result] = await pool.query("select 'pong' as db_connection");
    res.json(result[0]);
});

router.get("/xd", async (req, res) => {
    const [result] = await pool.query("select * from tipos_archivos");
    res.json(result);
});

export default router;
import { pool } from "../database/db.js";

export const getEmployees = async (req, res) => {
    try {
        const [employees] = await pool.query("select * from employees");

        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getSingleEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const [employee] = await pool.query(`select * from employees where id = ${id}`);
        if (!employee[0]) return res.status(404).json({ notfound: "Employee not found" });

        res.status(200).json(employee[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createEmployee = async (req, res) => {
    try {
        const { name, salary } = req.body;

        const [rows] = await pool.query(`insert into employees (name, salary) values ('${name}', ${salary})`);

        res.status(200).json({ employee: { id: rows.insertId, name, salary } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, salary } = req.body;

        const [result] = await pool.query(`update employees set name = '${name}', salary = ${salary} where id = ${id}`);
        if (result.affectedRows === 0) return res.status(404).json({ notfound: "Employee not found" });

        const [employee] = await pool.query(`select * from employees where id = ${id}`);

        res.status(200).json(employee[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(`delete from employees where id = ${id}`);
        if (result.affectedRows === 0) return res.status(404).json({ notfound: "Employee not found" });

        res.status(200).json({ employee: "Eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
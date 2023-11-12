import "dotenv/config";
import express from "express";
import morgan from "morgan";

import employeessRouter from "./routes/employees.route.js";
import indexRouter from "./routes/index.router.js"

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use("/", indexRouter);
app.use("/employees", employeessRouter);

app.use((req, res, next) => {
    res.status(404).json({ notfound: "Endpoint not found" });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
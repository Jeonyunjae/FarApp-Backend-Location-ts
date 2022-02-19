import express, { Application } from "express";
import { dbConnect } from "./db";
import indexRoutes from "./route/routes";

const app: Application = express();
const port = 3000;

// DB connect
//dbConnect();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);
app.listen(port, () =>
  console.log(`🚀Server is running on http://localhost:${port} ✅`)
);

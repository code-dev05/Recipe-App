import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

import { UserRouter } from "./routes/users.js";
import { RecipeRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", UserRouter);
app.use("/recipes", RecipeRouter);

mongoose.connect(
  `mongodb+srv://code-dev05:${process.env.PASSWORD}@recipeapp.e34jyok.mongodb.net/RecipeApp?retryWrites=true&w=majority`
);

app.listen(3001, () => console.log("SERVER STARTED"));

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { UserRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", UserRouter);

mongoose.connect(
  "mongodb+srv://code-dev05:mernfirstproject@recipeapp.e34jyok.mongodb.net/RecipeApp?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("SERVER STARTED"));

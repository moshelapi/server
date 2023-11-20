import express from "express";
import cors from "./middleware/morgen/cors/cors";
import morgan from "./middleware/morgen/morgen";
import { connectToDatabase } from "./connectToDB";

const app = express();

connectToDatabase();

app.use(express.json());

app.use(cors)
app.use(morgan)



const PORT = 8008;
app.listen(PORT, () => console.log(`server run in port ${PORT}!`));



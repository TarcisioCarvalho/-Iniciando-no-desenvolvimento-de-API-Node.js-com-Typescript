import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (request, response) => {
    return response.json({ message: "Olá Dev" });
});

app.listen(process.env.PORT, () =>
    console.log(`Logado na porta ${process.env.PORT}`),
);

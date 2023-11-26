// Importación de paquetes
import express from "express";

// Importaciones internas
import { getConnection } from "./database/mariadb.pool.js";

// Instanciamiento de la App
const app = express();

app.use("/db", async (req, res) => {
    try {
        const test_query = await (await getConnection()).query("SELECT 2 + 2;");

        console.log({
            test_connection: "Connection is true",
            test_query: await test_query,
        });

        return res.json({ validate: "Se ha establecido la conexión" });
    } catch (error) {
        console.log(error)
        return res.json({ validate: "Error al establecer la conexión" });
    }
});

export default app;

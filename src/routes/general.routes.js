// Importación de paquetes
import { Router } from "express";

// DB conexión
import { getConnection } from "../database/mariadb.pool.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        return res.json({
            msg: "Servidor en funcionamiento"
        });

    } catch (error) {
        return res.json({ error: "Error al establecer la conexión" });
    }
});

router.get("/db", async (req, res) => {
    try {
        const test_query = await (await getConnection()).query("SELECT NOW()");

        return res.json({
            msg: "Se ha establecido la conexión",
            query: test_query
        });

    } catch (error) {
        return res.json({ error: "Error al establecer la conexión" });
    }
});

export default router;

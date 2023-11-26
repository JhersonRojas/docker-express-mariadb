// Importación de paquetes
import { Router } from "express";

// DB conexión
import { getConnection } from "../database/mariadb.pool.js";

const router = Router();

router.get("/usuarios", async (req, res) => {
    try {
        const query = "SELECT * FROM usuarios;"
        const usuarios = await (await getConnection()).query(query);

        return res.json({
            msg: "Lista de usuarios",
            query: usuarios
        });

    } catch (error) {
        return res.json({ error: "Error al establecer la conexión" });
    }
});

router.post("/usuarios", async (req, res) => {
    try {
        const { id, nombre, email } = req.body;

        const query = `INSERT INTO usuarios VALUES(${id}, "${nombre}", "${email}")`
        const usuario = await (await getConnection()).query(query);

        if (!usuario) {
            throw new Error("No se ha realizado la inserción");
        }
        return res.json({
            msg: "Se ha creado el usuario",
        });

    } catch (error) {
        return res.json({ error: "Error al establecer la conexión" });
    }
});

export default router;

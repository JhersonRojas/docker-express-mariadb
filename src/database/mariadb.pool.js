// Importación de paquetes
import { config } from "dotenv";
import { createPool } from "mariadb";

// Modulos internos
import { logErrors } from "../libs/loggers.js";

config({ path: "./.env" });

const poolConfigs = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
};

export async function getConnection() {
    try {
        return await createPool(poolConfigs).getConnection();
    } catch (error) {
        logErrors({
            msg: "Ocurrio un error en la conexión con la base de datos",
            details: error,
        });
    }
}

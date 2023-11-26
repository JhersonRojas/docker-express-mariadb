// Importación de paquetes
import express from "express";
import morgan from "morgan";

// Importaciones internas
import general_routes from "./routes/general.routes.js";
import usuarios_routes from "./routes/usuarios.routes.js";

// Instanciamiento de la App
const app = express();

// Configuraciones
app.use(express.json());

if (process.env.NODE_ENV === "dev")
    app.use(morgan("dev"));

if (process.env.NODE_ENV === "prod")
    app.use(morgan("common", { skip: (_req, res) => res.statusCode < 400 }));

app.use(general_routes);
app.use(usuarios_routes);

export default app;

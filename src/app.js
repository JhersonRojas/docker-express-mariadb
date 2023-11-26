// Importación de paquetes
import express from "express";
import morgan from "morgan";

// Importaciones internas
import general_routes from "./routes/general.routes.js";
import usuarios_routes from "./routes/usuarios.routes.js";

// Instanciamiento de la App
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(general_routes);
app.use(usuarios_routes);

export default app;

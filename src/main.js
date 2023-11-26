// Modulos internos
import app from "./app.js";

// Función Main del Apirest
async function main() {
    try {
        // Puerto del servicio para el Api Rest
        const port = process.env.EXPRESS_PORT;
        if (!port) throw new Error("No se establecio el puerto para el App");

        // inicio del Apirest
        app.listen(port);
        console.log(`En el puerto  http://localhost:${port}`);

    } catch (error) {
        // Mensaje en caso de no iniciarse el programa
        console.error({
            error: "No fue posible iniciar el servidor",
            details: error,
        });
    }
}

main();

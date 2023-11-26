// Modulo para loggear errores
export function logErrors({ msg, details }) {
    return console.error({
        error: msg,
        detalles: details,
    });
}

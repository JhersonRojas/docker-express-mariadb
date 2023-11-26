export function logErrors({ msg, details }) {
    return console.error({
        error: msg,
        detalles: details,
    });
}

const credito = {
    monto: 0,
    plazo: 0,
    tasaInteres: 0,
    calcularCuota: function () {
        const tasaMensual = this.tasaInteres / 12 / 100
        const cuota = (this.monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -this.plazo))
        return cuota.toFixed(2)
    }
};

// Vector que almacenará múltiples solicitudes de crédito
const solicitudes = [];

// Función para agregar una nueva solicitud de crédito al vector
function agregarSolicitud(monto, plazo, tasaInteres) {
    const nuevaSolicitud = Object.create(credito)
    nuevaSolicitud.monto = monto
    nuevaSolicitud.plazo = plazo
    nuevaSolicitud.tasaInteres = tasaInteres
    solicitudes.push(nuevaSolicitud)
}

// Función para buscar solicitudes de crédito por monto
function buscarPorMonto(monto) {
    return solicitudes.filter(solicitud => solicitud.monto === monto)
}

// Ejemplo de uso: Agregar dos solicitudes de crédito
agregarSolicitud(5000, 12, 5)
agregarSolicitud(10000, 24, 8)

// Mostrar las solicitudes y calcular cuotas
solicitudes.forEach(solicitud => {
    console.log(`Monto: $${solicitud.monto}, Plazo: ${solicitud.plazo} meses, Tasa de Interés: ${solicitud.tasaInteres}%`)
    console.log(`Cuota Mensual: $${solicitud.calcularCuota()}\n`)
});

// Buscar solicitudes con un monto específico
const solicitudesFiltradas = buscarPorMonto(5000)
console.log(`Solicitudes con monto de $5000:`, solicitudesFiltradas)
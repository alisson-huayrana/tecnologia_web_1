class Hotel {
    constructor(nombre, ciudad, habitaciones) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.habitacionesDisponibles = habitaciones;
    }

    reservar(cantidad) {
        if (cantidad <= 0 || isNaN(cantidad)) {
            return "ERROR: La cantidad a reservar debe ser un número positivo.";
        }
        if (cantidad > this.habitacionesDisponibles) {
            return `ERROR: No hay suficientes habitaciones. Disponibles: ${this.habitacionesDisponibles}.`;
        }
        this.habitacionesDisponibles -= cantidad;
        return `ÉXITO: Se reservaron ${cantidad} habitaciones. Disponibles restantes: ${this.habitacionesDisponibles}.`;
    }

    liberar(cantidad) {
        if (cantidad <= 0 || isNaN(cantidad)) {
            return "ERROR: La cantidad a liberar debe ser un número positivo.";
        }
        this.habitacionesDisponibles += cantidad;
        return `ÉXITO: Se liberaron ${cantidad} habitaciones. Disponibles totales: ${this.habitacionesDisponibles}.`;
    }

    info() {
        return `
            <h2>Información Actual</h2>
            <ul>
                <li><strong>Nombre:</strong> ${this.nombre}</li>
                <li><strong>Ciudad:</strong> ${this.ciudad}</li>
                <li><strong>Habitaciones Disponibles:</strong> <span class="resaltado">${this.habitacionesDisponibles}</span></li>
            </ul>`;
    }
}
const miHotel = new Hotel("Paraíso Colonial", "Antigua", 35);
function actualizarInfoHotel() {
    document.getElementById('infoHotel').innerHTML = miHotel.info();
}

function realizarReserva() {
    const input = document.getElementById('cantReservar');
    const cantidad = parseInt(input.value);
    const resultadoElemento = document.getElementById('reservaResultado');

    const mensaje = miHotel.reservar(cantidad);
    if (mensaje.startsWith("ÉXITO")) {
        resultadoElemento.className = 'resultado-accion exito';
    } else {
        resultadoElemento.className = 'resultado-accion error';
    }
    
    resultadoElemento.textContent = mensaje;
    actualizarInfoHotel(); 
    input.value = 1; 
}

function realizarLiberacion() {
    const input = document.getElementById('cantLiberar');
    const cantidad = parseInt(input.value);
    const resultadoElemento = document.getElementById('liberacionResultado');

    const mensaje = miHotel.liberar(cantidad);
    if (mensaje.startsWith("ÉXITO")) {
        resultadoElemento.className = 'resultado-accion exito';
    } else {
        resultadoElemento.className = 'resultado-accion error';
    }
    
    resultadoElemento.textContent = mensaje;
    actualizarInfoHotel(); 
    input.value = 1; 
}
actualizarInfoHotel();
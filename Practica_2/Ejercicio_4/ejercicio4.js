const lugarTuristico = {
    nombre: "Cristo de la Concordia",
    ciudad: "Cochabamba",
    precioEntrada: 45.00,
    horario: "9:00 - 17:00",
    calificaciones: [3.5, 5.0, 3.5, 4.5, 5.0],

    promedioCalificaciones: function() {
        const total = this.calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
        return (total / this.calificaciones.length).toFixed(2);
    },

    aplicarDescuento: function(porcentaje) {
        if (porcentaje >= 0 && porcentaje <= 100) {
            const descuentoAplicado = this.precioEntrada * (porcentaje / 100);
            this.precioEntrada = this.precioEntrada - descuentoAplicado;
            this.precioEntrada = parseFloat(this.precioEntrada.toFixed(2));
        } else {
            console.error("El porcentaje debe estar entre 0 y 100.");
        }
    }
};
function mostrarPromedio() {
    const promedio = lugarTuristico.promedioCalificaciones();
    document.getElementById('promedioResultado').textContent = `Promedio: ${promedio} / 5.0`;
}
function aplicarMostrarDescuento() {
    const porcentajeInput = document.getElementById('descuento').value;
    const porcentaje = parseFloat(porcentajeInput);

    if (isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100) {
        document.getElementById('precioResultado').textContent = "Error: Descuento inválido.";
        return;
    }

    lugarTuristico.aplicarDescuento(porcentaje);
    
    document.getElementById('precioResultado').textContent = `Precio con ${porcentaje}% desc.: ${lugarTuristico.precioEntrada}`;
}
function inicializarInfo() {
    const infoDiv = document.getElementById('infoLugar');
    infoDiv.innerHTML += `
        <ul>
            <li><strong>Nombre:</strong> ${lugarTuristico.nombre}</li>
            <li><strong>Ciudad:</strong> ${lugarTuristico.ciudad}</li>
            <li><strong>Precio Inicial:</strong> ${lugarTuristico.precioEntrada.toFixed(2)}</li>
            <li><strong>Horario:</strong> ${lugarTuristico.horario}</li>
            <li><strong>Calificaciones:</strong> [${lugarTuristico.calificaciones.join(', ')}]</li>
        </ul>`;
    document.getElementById('promedioResultado').textContent = "Promedio: Pendiente de cálculo";
    document.getElementById('precioResultado').textContent = `Precio Actual: ${lugarTuristico.precioEntrada.toFixed(2)}`;
}
inicializarInfo();
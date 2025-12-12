function clasificarClima() {
    const tempCelsius = parseFloat(document.getElementById('temperatura').value);
    const resultadoElemento = document.getElementById('resultadoClima');

    if (isNaN(tempCelsius)) {
        resultadoElemento.textContent = "¡Error! Por favor, ingresa un número válido.";
        return;
    }

    const clima = obtenerClima(tempCelsius);
    resultadoElemento.textContent = `Temperatura: ${tempCelsius}°C. Clima: ${clima}`;
}
function obtenerClima(temp) {
    let climaResultado = "Desconocido (Fuera de rango)";
    if (temp >= -10 && temp <= 15) {
        climaResultado = "Frio";
    } 
    else if (temp >= 16 && temp <= 25) {
        climaResultado = "Templado";
    } 
    else if (temp >= 26 && temp <= 40) {
        climaResultado = "Calor";
    }
    
    return climaResultado;
}
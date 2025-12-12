function mostrarFechaActual() {
    const fecha = new Date(); 
    
    const diasSemana = [
        "Domingo", "Lunes", "Martes", "Miércoles", 
        "Jueves", "Viernes", "Sábado"
    ];
    const nombresMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    const diaSemanaIndex = fecha.getDay();
    const diaMes = fecha.getDate();
    const mesIndex = fecha.getMonth();
    const anio = fecha.getFullYear();
    
    const nombreDiaSemana = diasSemana[diaSemanaIndex];
    const nombreMes = nombresMeses[mesIndex];
    const fechaFormateada = `${nombreDiaSemana}, ${diaMes} de ${nombreMes} del ${anio}`;
    document.getElementById('fechaActual').textContent = fechaFormateada;
}

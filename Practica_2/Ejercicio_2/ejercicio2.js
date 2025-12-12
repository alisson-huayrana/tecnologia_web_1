function ejecutarFizzBuzz() {
    const listaResultados = document.getElementById('resultadoFizzBuzz');
    listaResultados.innerHTML = ''; 

    for (let i = 1; i <= 100; i++) {
        let salida = i.toString(); 
        let claseCSS = 'normal-item';

        if (i % 3 === 0 && i % 5 === 0) {
            salida = 'FizzBuzz';
            claseCSS = 'fizzbuzz-item';
        } 
        else if (i % 3 === 0) {
            salida = 'Fizz';
            claseCSS = 'fizz-item';
        } 
        else if (i % 5 === 0) {
            salida = 'Buzz';
            claseCSS = 'buzz-item';
        }
        const itemLista = document.createElement('li');
        itemLista.textContent = `${i}: ${salida}`;
        itemLista.className = claseCSS;
        listaResultados.appendChild(itemLista);
    }
}
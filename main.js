
function gerar() {
    const numero = parseInt(document.getElementById("numero").value);
    const coluna = document.getElementById("coluna").value;
    const minimo = parseInt(document.getElementById("minimo").value, 10);
    const maximo = parseInt(document.getElementById("maximo").value, 10);
    const tabela = document.getElementById("tabela");

    // console.log(numero);

    for (let i = 0; i < numero ; ++i) {

        let numeros = Math.trunc(Math.random() * (maximo - minimo) + minimo);
        // console.log('contador', i, numeros);
        
        if (i % coluna == 0) {
            tabela.innerHTML += "\n";
            tabela.innerHTML += ` ${numeros} `;
            // console.log(coluna);
        } else {
            tabela.innerHTML += ` ${numeros} `;
            // console.log(numeros);
        }
    }
}

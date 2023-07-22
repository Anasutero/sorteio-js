const btn = document.getElementById('gerar');

btn.addEventListener('click', function sortaear(){
    let numeros = [];
    let min =0;
    let max=25;

    while(numeros.length <15){
        let numeroSorteado= Math.floor(Math.random() * (max - min +1) + min);
        if(numeros.indexOf (numeroSorteado) === -1){
            numeros.push(numeroSorteado);
        }
    }
numeros.sort(function(a,b){
    return a - b;
})
let numeroGerado = document.getElementById('num');
numeroGerado.innerHTML = numeros.join(',')
})
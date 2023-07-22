let btn = document.getElementById('btn-info');

btn.addEventListener('click', function abrirJanela(){
    let janela =document.getElementById('details');

    if(janela.classList.contains("details")){
        janela.classList.remove("details");
        janela.classList.add("abrirJanela");
    }else{
        janela.classList.remove("abrirJanela");
        janela.classList.add("details")
    }
})
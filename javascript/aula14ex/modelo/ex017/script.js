function calcular() {
    var numinput = document.querySelector('#numtxt')
    var tabuada = document.querySelector('#tabuadatxt')


    if (numinput.value.length == 0) {
        alert('[-ERRO-] Insira um valor para o calculo!')
    }
    else {
        tabuada.innerHTML = ``
        var numinput = Number(numinput.value)
        for (var c = 0;c <= 10;c++) {
            var criarOption = document.createElement('option')
            criarOption.text = `${numinput}x${c} = ${numinput*c}`
            tabuada.appendChild(criarOption)    
        }
    }




}
function contar() {
    var inicio = Number(document.querySelector('#iinicio').value)
    var fim = Number(document.querySelector('#ifim').value)
    var passo = Number(document.querySelector('#ipasso').value)

    var contando = document.querySelector('#icontando')
    var res = document.querySelector('#iresult')
    
    res.innerHTML = ''
    contando.innerHTML = 'Contando:'

    if (inicio == '' || fim == '' || passo == '') {
        alert('[- ERRO -] - A falta de informações impossibilita a contagem, verifique os campo e tente novamente!')
    }
    else {
        if (inicio < fim){
            for ( inicio ; inicio <= fim ; inicio += passo ) {
                res.innerHTML += ` ${inicio} &#128073 `
            }
        
        }
        else {
            for ( inicio ; inicio >= fim ; inicio -= passo )
                res.innerHTML += ` ${inicio} &#128073 `  
        }
        res.innerHTML += ` &#127937`
    }


}
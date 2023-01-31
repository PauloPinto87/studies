function contar() {
    var inicio = document.querySelector('#iinicio')
    var fim = document.querySelector('#ifim')
    var passo = document.querySelector('#ipasso')
    var contando = document.querySelector('#icontando')
    var res = document.querySelector('#iresult')
    res.innerHTML = ''
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '[- ERRO -] - A falta de informações impossibilita a contagem, verifique os campo e tente novamente!'
    }
    else {

        contando.innerHTML = 'Contando:'
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)

        if (passo <= 0) {
            alert('Passo inválido!, será considerado passo igual a 1.')
            passo = 1
        }
        // Contagem crescente
        if (inicio < fim){
            for ( inicio ; inicio <= fim ; inicio += passo ) {
                res.innerHTML += ` ${inicio} &#128073 `
            }
        // Contagem regressiva
        }
        else {
            for ( inicio ; inicio >= fim ; inicio -= passo )
                res.innerHTML += ` ${inicio} &#128073 `  
        }
        res.innerHTML += ` &#127937`
    }
}
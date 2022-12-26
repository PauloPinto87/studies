function contar() {
    var inicio = document.getElementById('txinicio')
    var passo = document.getElementById('txpasso')
    var fim = document.getElementById('txfim')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] - Faltam dados!')
    } 
    else {
        var inicio = Number(inicio.value)
        var passo = Number(passo.value)
        var fim = Number(fim.value)

        if (passo <= 0) {
            window.alert('[ERRO] - Passo inválido, vou considerar como passo igual a 1.')
            passo = 1
        }

        res.innerHTML = 'Contando: <br>'
        
        if (inicio < fim) {
            for (var cont = inicio; cont <= fim; cont += passo) {
                res.innerHTML +=  ` \u{1F449} ${cont}`
            } 
        }
        else{
            for( var cont = inicio; cont >= fim; cont -= passo) {
                res.innerHTML += ` \u{1F449} ${cont}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
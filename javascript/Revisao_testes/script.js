function verificar() {
    var anoNasci = Number(document.querySelector('#iano').value)
    var agora = new Date()
    var anoAgora = agora.getFullYear()
    var idade = anoAgora - anoNasci
    var res = document.querySelector('#iresult')
    var sexo = ''
    var fase = ''

    if ((document.querySelector('#imasc').checked)) {
        sexo = 'masculino'
    }
    else {
        sexo = 'feminino'
    }

    if (idade < 10) {
        fase = 'bebe'
    }
    else if (idade < 18) {
        fase = 'jovem'
    }
    else if ( idade < 50) {
        fase = 'adulto'
    }
    else {
        fase = 'idoso'
    }
        
    res.innerHTML = `Detectamos uma pessoa do sexo ${sexo} que completa ${idade} anos em ${anoAgora}.`

    document.querySelector('#iimagem').src = `imagens/foto-${fase}-${sexo}.png`
}
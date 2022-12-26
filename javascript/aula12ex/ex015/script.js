function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var imagem = document.createElement('img')


    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] - Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var fase = ''

        if (idade < 10) {
            fase = 'bebe'
        }
        else if (idade < 18) {
            fase = 'jovem'
        }
        else if(idade < 60) {
            fase = 'adulto'
        }
        else {
            fase = 'idoso'
        }

        if (fsex[0].checked) {
            gênero = 'masculino'
        }
        else if (fsex[1].checked) {
            gênero = 'fêminino'
        }

        img.setAttribute('src', `foto-${fase}-${gênero}.png`)

        res.style.textAlign = 'center'
        res.innerHTML = `Detectado uma pessoa do sexo ${gênero} e com idade de ${idade} anos.`
        res.appendChild(img)
        document.getElementById('foto').style.padding = '15px 0px 0px 0px'


    }
}
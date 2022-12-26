function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 10
    var hora_msg = data.toLocaleTimeString()

    msg.innerHTML = `Nesse momento são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        imagem.src = 'fotomanha.png'
        //document.body.style.backgroundcolor = '#d8c087'
        document.body.style.background = '#d8c087'
    }
    else if (hora >= 12 && hora < 18) {
        imagem.src = 'fototarde.png'
        document.body.style.background = '#bb8177'
    }
    else {
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#352942'
    }

}

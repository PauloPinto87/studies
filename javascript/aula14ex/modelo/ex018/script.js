var quantNum = 0
var soma = 0
var lista = []
let painel = document.querySelector('#ipainel')
let resultado = document.querySelector('#resultado')
let num = document.querySelector('#inum')

function principal() {
    let num = Number(document.querySelector('#inum').value)
    existeNaLista(num)  
}

function existeNaLista(n) {
    if (lista.indexOf(n) == -1 && n >= 0 && n <= 100) {
        inserir(n)
    }
    else {
        alert('[ERRO]- Esse número já existe na lista ou está fora do intervalo especificado')
    }
}

function inserir(n) {
    quantNum ++
    var elementoCriado = document.createElement('option')
    elementoCriado.value = n
    elementoCriado.text = `O número ${n} foi adicionado.` 
    painel.appendChild(elementoCriado)
    painel.setAttribute('size', quantNum)
    lista.push(n)
    num.value = ''
    num.focus()
    resultado.innerHTML =''
}

function analisar(){

    if (lista.length == 0) {
        alert('Não existem dados para serem analisados! Você deve adicionar primeiro!')
    } else {  
        resultado.innerHTML =''

        lista.sort((a, b)=>{
        return a - b
        })

        for (var cont = 0; cont < lista.length; cont ++) {
        soma +=  lista[cont]
        }

        resultado.innerHTML += `O menor valor informado foi ${lista[0]}.<br>`
        resultado.innerHTML += `O maior valor informado foi ${lista[(lista.length)-1]}.<br>`
        resultado.innerHTML += `A soma de todos os valores é igual a ${soma}.<br>`
        resultado.innerHTML += `A média dos valores informados é ${(soma/lista.length).toFixed(1)}.`

        soma = 0
    }
}

function reset() {
    resultado.innerHTML =''
    painel.innerHTML = ''
    lista = []
}


/*
function adicionar () {
    var num = document.querySelector('#inum')
    var painel = document.querySelector('#ipainel')

    existeNaLista(num)
    alert(num)


    if (num.value.length == 0) {
        alert('[ERRO] - Insira um número, o campo está vazio!')
    }
    else {
        var num = Number(num.value)
        if (num <= 0 || num >= 100 || lista.indexOf(num) != -1) {
            alert('[ERRO] - Valor fora do intervalo especificado, ou já existe na lista, verifique e tente novamente!')
        }
        else {
            quantNum = quantNum + 1        
            var criarOption = document.createElement('option')
            criarOption.text = `Valor ${num} adicionado.`
            criarOption.value = num
            painel.appendChild(criarOption)
            painel.setAttribute('size', quantNum)


            lista.push(num)

        }
    }
}

function analisar () {
    for (var cont = 0; cont < lista.length;cont++) {
        soma += lista[cont]
    }

    alert(`A soma é igual a: ${soma}`)
    alert(lista.length)
}*/
var idade = 18
if (idade < 16) {
    console.log('Não pode votar.')
}
else {
    if (idade >= 16 && idade < 18){
        console.log('Voto opcional.')
    }
    else{
        console.log('Deve votar.')
    }
}
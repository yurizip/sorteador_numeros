function monitorar_inputs(){
    let qtde = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    let botao2 =  document.getElementById('btn-sortear');
    if(qtde !== '' && de !== '' && ate !== ''){
        botao2.classList.remove('container__botao-desabilitado');
        botao2.classList.add('container__botao');
        botao2.disabled = false;
    }else{
        botao2.classList.remove('container__botao');
        botao2.classList.add('container__botao-desabilitado');
        botao2.disabled = true;
    }
}

document.getElementById('quantidade').addEventListener('input', monitorar_inputs);
document.getElementById('de').addEventListener('input', monitorar_inputs);
document.getElementById('ate').addEventListener('input', monitorar_inputs);

function sortear(){
    let qtde = parseInt(document.getElementById('quantidade').value);
    let de =   parseInt(document.getElementById('de').value);
    let ate =  parseInt(document.getElementById('ate').value);
    let nums_sorteados = [];
    let num;
    if(de >= ate){
        alert(`verifique se os dados fornecidos estao corretos!`);
        return;
    }
    if(qtde >= ate - de + 1){
        alert(`verifique se a quantidade de numeros e maior do que a diferenca entre Ate o numero e do numero`);
        return;
    }
    for (let i = 0; i < qtde; i++) {
        num = randomizador(de, ate);
        while(nums_sorteados.includes(num)){
            num = randomizador(de, ate);
        }
        nums_sorteados.push(num);
    }
    let result = document.getElementById('resultado');
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${nums_sorteados} </label>`
    alterar_reiniciar();
}
function randomizador(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function alterar_reiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterar_reiniciar();
    monitorar_inputs();
}
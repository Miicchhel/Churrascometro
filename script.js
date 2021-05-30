//carne - 400g por pessoas | + de 6h - 650g
//cerveja 1200ml por pessoas | + de 6h - 2000ml
//refrigerante/agua - 1000ml | + de 6h - 1500ml

//crianças valem por 0,5
let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
// console.log(inputAdultos.value,inputCriancas.value,inputDuracao.value)
let resultado = document.getElementById("resultado")

function calcular(){
    console.log("calculando")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qTotalCarne = (carnePP(duracao) * adultos) + ((carnePP(duracao)/ 2) * criancas)
    let qTotalCerveja = cervejaPP(duracao) * adultos
    let qTotalBebidas = (bebidasPP(duracao)* adultos) + ((bebidasPP(duracao)/2) * criancas)

    resultado.innerHTML = `<p>${qTotalCarne/1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qTotalBebidas/2000)}ml Garragas de Bebida</p>`    

}

function carnePP(duracao){
    let carne = 400
    if(duracao>=6){
        carne=650
    }
    return carne
}

function cervejaPP(duracao){
    let cerveja = 1200
    if(duracao>=6){
        cerveja=2000
    }
    return cerveja
}

function bebidasPP(duracao){
    let bebidas = 1000
    if(duracao>=6){
        bebidas=1500
    }
    return bebidas
}
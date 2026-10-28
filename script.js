// Funções 
function dizerOi(nome, idade) {
return `Olá meu nome é ${nome}, e eu tenho ${idade} anos.`
}
let nomeUsuario = "Laura"
let idadeUsuario = "17"
console.log(dizerOi(nomeUsuario, idadeUsuario))
console.log(dizerOi("Eduardo", 15))


function somar(n1,n2){
    return n1 +n2
}

let num1 = 2
let num2 = 7
let resultadoSoma = somar(num1, num2)

console.log(resultadoSoma)
console.log(somar(num1,num2))
console.log(somar(2,3))

// Atividade 1 IMC
let peso = 35
let altura = 1.60

function calcularImc(peso, altura){
    return peso / (altura**2)
}

let imc = calcularImc(peso, altura)
let classifi = classificacao(imc)

function classificacao(imc){
    if (imc <= 18.5 ){
        return "abaixo do peso"
    } else if (imc < 25){
        return "Peso Normal"
    } else if (imc < 30){
        return "Sobrepeso" 
    } else if (imc < 34.9){
        return "Obesidade Grau I"
    } else if (imc < 39.9){
        return "Obesidade Grau II" 
    } else {
        return "Obesidade Grau III"
    }
}

console.log(`Seu IMC é ${imc} e sua classificação é ${classifi}.`)
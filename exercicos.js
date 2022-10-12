function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos) }

/*const produtos = {
        
        nome: "iphone" , categoria: "Celular", preco: 2000,
       novos: {
            nome: "Camisa", categorian: "vestimenta de time", preco:250
        }
}
let total = 0
console.log(produtos.preco + produtos.novos.preco)

function despesasTotais(produtos) { return produtos.map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual) }*/


const numeros = [8,2,3,4,6];
function menores(numeros){
    let menor = numeros[0]
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i]< menor){
            menor =  numeros[i]
        }
        
    }
    console.log(menor)
}
menores(numeros)

function pares(numeros){
    let novosPares = 0
    for(let i=0 ; i < numeros.length; i++){
        
        novosPares += numeros[i] 
    }
    console.log(novosPares)
}
pares(numeros);

const objetoArray = {
    nome: "Allan",
    profissao: "Programador"
}
function arrayObjeto(objetoArray){
    let chaves = Object.keys(objetoArray)
    const novoArrayObjeto = chaves.map(function(keys){
        return [keys, objetoArray[keys]]
    })
      console.log(novoArrayObjeto)
}
arrayObjeto(objetoArray);

/*function removerPropriedade(objeto, nomeDaPropriedade) { const copia = Object.assign({}, objeto)

console.log(copia) 
}
removerPropriedade({d:1 , b:2} , "a")




const novoArray= [7 ,"codigo" ,5 , "isso"]
function repitir( novoArray){
    const newArray = []
    for(let i = 0 ; i < novoArray.length; i++){
        const tipo = typeof novoArray[i]
        if(tipo== "number"){
            newArray.push(novoArray[i])
        }
    }
    
    
    console.log(newArray, novoArray)
}
repitir(novoArray)




function nomeMes (numero){
    if(numero > 12){
        console.log("numero invalido")
    }
    switch(numero){
        case 1:
            console.log("Janeiro")
            break
        case 2:
            console.log("Fevereiro")
            break
        case 3:
            console.log("marco")
            break
        case 4:
            console.log("Abril")
            break
        case 5:
            console.log("Maio")
            break
        case 6:
            console.log("Junho")
            break
        
        case 7:
            console.log("Julho")
            break
        case 8:
            console.log("Agosto")
            break
        case 9:
            console.log("Setembro")
            break
        case 10:
            console.log("Outubro")
            break
        case 11:
            console.log("Novembro")
            break
        case 12:
            console.log("Dezembro")

}
}
nomeMes(7)*/
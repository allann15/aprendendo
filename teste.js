function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(6);
    item = arr.shift();
  
    return item;
    // Only change code above this line
  }
  
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr))






const carrinho = [
    '{ "nome": "notebook" , "preco": 2333.45 , "Fragil": true}',
    '{ "nome": "caderno" , "preco": 13.90 , "Fragil": false}',
    '{ "nome": "kitlapis" , "preco": 43.45 , "Fragil": false}',
    '{ "nome": "canetainteligente" , "preco": 1557.45 , "Fragil": true}'
]
const converterJson = json => JSON.parse(json);
const apenasPreco = produto => produto.preco 
const apenasTipo = tipo => tipo.Fragil
const convertendo = carrinho.map(converterJson).map(apenasPreco);
console.log(convertendo);
const tipos = carrinho.map(converterJson).map(apenasTipo);
console.log(tipos);
convertendo.push(tipos)
console.log(convertendo)
console.log(convertendo.filter(function(p){
    return p > 1500;
}))




Array.prototype.forEach2 = function(retorna){
    for(let i =0 ; i < this.length; i++){
        retorna(this[i], i, this)
    }
}
    

const myList = ["salgadinho" ,"bebida", "doces", "fitness", "cafe"];
myList.forEach2(function(produto , valor){
    console.log(`${valor}) ${produto}` )
})

function comprimentos(x,y,z){
    if(x == y && x == z && y == z){
        console.log("esse triangulo é equilatero")
    } else if(x == z || x == y && y != z){
        console.log("esse triangulo é isósceles")
    } else if(y == z && x != z && x != y){
        console.log("esse triangulo é isósceles")
    } else{
        console.log("esse triangulo é escaleno")
    }
}
comprimentos(4,2,2)

function mathe(e,i){
    console.log((e+i).toFixed(2))
    
}
mathe(0.1,0.2)

function jurossimp(capital, jurossimples,tempoaplicado){
    console.log(capital*jurossimples*tempoaplicado)
}

function juroscomp(capital2, juroscomposto,tempoaplicado2){
    soma = (1 + juroscomposto);
    console.log(capital2 * Math.pow(soma,tempoaplicado2))
}
juroscomp(2000, 0.03, 4)
console.log((3+9)/3*4)



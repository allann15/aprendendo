const produto = new Object
produto.valor = 10
produto. multi = 5
console.log(produto.valor * produto.multi)
const casa = {
    tamanho: 300,
    preco : '4000.0000R$$',
    comodos: 4,
    moveis: {
        sofa: 2,
        cama: 2,
        geladeira: 2
    },
    get valors() {return this.comodos++},
    set valors(valors){this.moveis.sofa = valors},
    
    custotal(custo) {
        
         this.custo =2 *this.tamanho * this.comodos * this.moveis.cama *this.moveis.sofa *this.moveis.geladeira 
         return `${this.custo}` 
        
    },
    


}
casa.moveis.sofa = '3'
console.log(casa.moveis.sofa * casa.moveis.geladeira )
casa.comodos = 5
console.log(casa.valors)
const sala = {__proto__:casa , TV:4}
console.log(sala.moveis.sofa)

console.log(casa.custotal())
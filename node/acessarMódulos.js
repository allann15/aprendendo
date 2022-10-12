const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');


const nacionalidade = nacio => nacio.pais === 'Brazil'
const sexo = gen => gen.genero === 'M'
const maiorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    

    const trabalhadores = funcionarios.filter(nacionalidade).filter(sexo).reduce(maiorSalario)
    console.log(trabalhadores)
})





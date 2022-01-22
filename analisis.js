// HELPERS
function esPar(numerito){
    return (numerito % 2 ===0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// CALCULADORA
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// MEDIANA GENERAL
const salarioPe = peru.map(
    function(personita){
        return personita.salary;
    }
);

const salarioPeSorted = salarioPe.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralPE = medianaSalarios(salarioPeSorted);

// MEDIANA DEL TOP 10%

const spliceStart = (salarioPeSorted.length * 90) / 100;
const spliceCount = salarioPeSorted.length - spliceStart;

const salarioPeTop10 = salarioPeSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Pe = medianaSalarios(salarioPeTop10);

console.log({
        medianaGeneralPE,
        medianaTop10Pe,
});

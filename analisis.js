/*Helpers o utils*/
/*Calcula si es par o no*/
function esPar(numerito) {
  return numerito % 2 === 0;
}
/*Calcula si es par o no*/

/*Calcula mediana*/
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
/*Calcula mediana*/

/*Calcula la mediana de salarios*/
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}
/*Calcula la mediana de salarios*/

/*Calcula la Mediana General de las personas*/
const salariosMex = mexico.map(function (persona) {
  return persona.salary;
});
/*Calcula la Mediana General de las personas*/

/*Ordena los salarios de menor a mayor*/
const salariosMexOrden = salariosMex.sort(function (salarioA, salarioB) {
  return salarioA - salarioB;
});
/*Ordena los salarios de menor a mayor*/

const medianaGeneralMex = medianaSalarios(salariosMexOrden);

/*Mediana del 10%*/

const spliceStart = (salariosMexOrden.length * 90) / 100;
const spliceCount = salariosMexOrden.length - spliceStart;

const salariosMexTop10 = salariosMexOrden.splice(spliceStart, spliceCount);

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log({
  medianaGeneralMex,
  medianaTop10Mex,
});

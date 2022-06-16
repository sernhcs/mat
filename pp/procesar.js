//trae los datos del html
let miCadena = document.getElementById('cadena');
// compara los numeros a traves del forEach de cualquier lista, buscando el mayor
function numeroMayor(listaPar) {
    let numHigh = null
    listaPar.forEach(element => {
        if (element > numHigh) {
            numHigh = element
        }
    }); 
    return numHigh;
}
//trae y divide el string por las comas se usa el split
function traerCadena(){
    let texto = miCadena.value
    let listanumeros = texto.split("," );
    let listaPar = [];
    listanumeros.forEach (element => {
        if(element % 2 == 0){
            listaPar.push(element)
        }
    })
//El join une los valores de un array y lo pasa a texto, con el separador en este caso la coma    
    document.getElementById('resultado').textContent=listaPar.join(","); 

//se declara una variable para asginarle la lista par y se compara con la function numero mayor
    let parmayor_result = numeroMayor(listaPar)
    document.getElementById('resultado2').textContent=parmayor_result;

//se declara una variable para asginarle la lista impar y se compara con la function numero mayor
    let listaimpar_result = traerCadenaImpar(listanumeros)
    document.getElementById('resultado3').textContent=numeroMayor(listaimpar_result); 
}

// busca el numero impar y lo añade a un array
function traerCadenaImpar(arraydenumeros){
   
    let listaImpar = [];
    arraydenumeros.forEach (element=>{
        if(element % 2 == 1){
            listaImpar.push(element)
        }
    })
    return listaImpar;

}

    


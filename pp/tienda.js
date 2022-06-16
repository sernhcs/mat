
function descuento(){
    let inputCliente = document.getElementById('cliente');
    let inputProd = document.getElementById('prod1');
 
    
        
    document.getElementById('cliente_txt').textContent=inputCliente.value;
    document.getElementById('producto_txt').textContent=inputProd.value;
    document.getElementById('dscto_porctj').textContent=porcentaje;
}
function calcularDscto(){
    let porcentaje = 0 
    if (prod1.value =='pan'){
        porcentaje = 0.955
    } else if(prod1.value == 'carne'){
        porcentaje = 0.985
    }
    let inputPrecio = document.getElementById('precio1');
    let precio1 = inputPrecio.value
    let cantidadProd = document.getElementById('cantidad');

    let quant1 = cantidadProd.value

    let resultadoPrecio=precio1*porcentaje*quant1;
    
    document.getElementById('costo_total').textContent=resultadoPrecio.value;
}
//Esto agrega a la pantalla el valor del botón de la calculadora que toquemos
function agregar(valor){
   document.getElementById('pantalla').value += valor;
}

function borrarUno(){
    const valorPantalla = document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = valorPantalla.substring(0, valorPantalla.length - 1);    
}

function borrarTodo(){
    document.getElementById('pantalla').value = '';   
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}

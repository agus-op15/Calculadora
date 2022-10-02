const displayValorAnterior = document.getElementById('valor-anterior')
const displayValorActual = document.getElementById('valor-actual')
const botonesNumeros = document.querySelectorAll('.numero')         /*Variables declaradas */
const botonesOperadores = document.querySelectorAll('.operador')

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML)); //Al hacer click en el boton, pasa su inner HTML como parametro para agregar a la calculadora  
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});
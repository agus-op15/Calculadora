class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior; // Propiedades de la clase
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined; //guarda el tipo de operacion que esta utilizando el usuario
        this.valorActual = '';
        this.valorAnterior = ''; //string vacios
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1); //Para borrar el ultimo numero, o recortar
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior; //Cuando actualizamos el valor actual, el valor anterior pasa a ser el valor actual, pero si no ha valor actual quiere decir que solamente tenemos operador
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return //Preguntamos si hay un punto, para poner unicamente un solo valor de "."
        this.valorActual = this.valorActual.toString() + numero.toString(); //Calculadora recibe numero, y seteamos el valor ese al display y concatenamos
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual); //Hacemos esto porque trabajamos entre strings y numeros reales, por eso parseFloat para que deje de ser string y sea un numero
        
        if(isNaN(valorActual) || isNaN (valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }

}
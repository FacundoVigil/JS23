const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('.botones button');


function agregarNumero(numero) {
	pantalla.value += numero;
}


function agregarOperador(operador) {
	pantalla.value += operador;
}


function calcularResultado() {
	try {
		const resultado = eval(pantalla.value);
		pantalla.value = resultado;
	} catch (e) {
		pantalla.value = 'Error';
	}
}

function limpiarPantalla() {
	pantalla.value = '';
}

botones.forEach(boton => {
	boton.addEventListener('click', () => {
		const valor = boton.textContent;
		switch (valor) {
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '0':
				agregarNumero(valor);
				break;
                case '+':
                    case '-':
                    case 'x':
                    case '/':
                        agregarOperador(valor);
                        break;
                    case '=':
                        calcularResultado();
                        break;
                    case 'C':
                        limpiarPantalla();
                        break;
                }
            });
        });

        const storage = window.localStorage;
        const datos = {
            historial: []
        };
        
        function guardarDatos() {
            storage.setItem('datos', JSON.stringify(datos));
        }
        

        function recuperarDatos() {
            const datosStorage = storage.getItem('datos');
            if (datosStorage) {
                datos = JSON.parse(datosStorage);
            }
        }
        

window.addEventListener('beforeunload', guardarDatos);


recuperarDatos();


function mostrarHistorial() {
	const historial = datos.historial;
	const listaHistorial = document.getElementById('lista-historial');
	listaHistorial.innerHTML = '';
	historial.forEach((operacion, indice) => {
		const item = document.createElement('li');
		item.textContent = `${operacion.num1} ${operacion.operador} ${operacion.num2} = ${operacion.resultado}`;
		listaHistorial.appendChild(item);
	});
}

document.getElementById('boton-historial').addEventListener('click', mostrarHistorial);


function calcularResultadoYMostrar() {
	calcularResultado();
	const resultado = pantalla.value;
	datos.historial.push({
		num1: pantalla.value,
		resultado: resultado
	});
	guardarDatos();
	mostrarHistorial();
}

document.getElementById('boton-igual').addEventListener('click', calcularResultadoYMostrar);
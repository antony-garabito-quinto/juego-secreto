
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'juego del numero secreto';*/

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'indique un numero del 1 al 10 ';*/ 

// meti el cofdigo en una funcion para aserlo mas sensilli y es mejor para un programador

let numeroSecreto = 0;
let intento = 0 ;
let listaNumeroSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemtento, texto){
    let titulo = document.querySelector(elemtento);
    titulo.innerHTML = texto;
    return;
};
function verificarIntento(){
    let numeroDeUnsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUnsuario===numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero ${intento} ${(intento===1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUnsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intento++;
        limpiarCaja();
    }
    return;
};

function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';
    
};

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo + 1);

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

//si ya sorteanos todo los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon los numeros posibles');
    } else{
        //si en numero generado esta incluido en una lista
        if(listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        
        }
    }
};

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`indique un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;

};

function reiniciarJuego(){
// limpiar la caja
limpiarCaja();
// indicar mensajes  intervalos de numeros
// generar el numero alerio
//inicializar el nuemro de intientos
condicionesIniciales();
// desabilitar el boton de reiniciar juego
document.querySelector('#reiniciar').setAttribute('disabled','true');

};

condicionesIniciales();


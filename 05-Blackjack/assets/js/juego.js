/**
 * 2C - Clubs
 * 2D - Diamonds
 * 2H - Hearts
 * 2S - Spades
 */

//patron modulo
//funciones anonimas aunto invocadas
//dejarlo habilitado cuando va a produccion
const miModulo = (() => {
    'use strict'

    let deck         = [];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];
    
    let puntosJugadores = [];
    
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');
    
    const divCartasJugadores    = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');
    
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();

        btnPedir.disabled   = false;
        btnDetener.disabled = false;

        puntosJugadores = [];
        for( let i = 0; i < numJugadores; i++ ){
            puntosJugadores.push(i);
            puntosHTML[i].innerText = 0;
            divCartasJugadores[i].replaceChildren();
        }
    }

    const crearDeck = () => {
        deck = [];
        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tipos ){
                deck.push( i + tipo );
            }
        }
    
        for( let tipo of tipos ){
            for( let esp of especiales ){
                deck.push( esp + tipo );
            }
        }
    
        return _.shuffle( deck );
    }
    
    const pedirCarta = () => {
        if( deck.length === 0){
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }
    
    const valorCarta = (carta) => {
        const valor = carta.substring(0,carta.length-1);
        return isNaN(valor) ? 
                ( valor === 'A' ) ? 11 : 10 
                : valor*1;
    }
    
    //Turno: 0 = primer jugador y ultimo es la PC
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] += valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            alert( (puntosComputadora === puntosMinimos) ? 
                    'Empate' 
                    : (puntosComputadora <= 21) ? 'Computadora gano' : 'Gano Jugador'); 
        }, 50);
    }
    
    // turno de la pc
    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta,puntosJugadores.length -1 );
            crearCarta( carta,puntosJugadores.length -1 );
    
            if(puntosMinimos > 21){
                break;
            }
        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
    
        determinarGanador();
    }
    
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta,0 );
        crearCarta( carta,0 );
    
        if( puntosJugador > 21 ){
            console.warn('Perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if ( puntosJugador === 21 ){
            console.warn('21 Ganaste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });
    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores[0] );
    });
    
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    // lo de este return es publico
    return {
        nuevoJuego: inicializarJuego
    };
})();
//invocacion ()



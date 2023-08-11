/**
 * @author Chris Isaac Marquez Cobos
 * @version 1.0.0
 * @description Juego de piedra, papel o tijera.
 * Documentado con formato JsDoc.
 */

/** 
 * Elementos del DOM
 * @var {object} resultDiv   - Objeto que contiene el div donde se mostrará el resultado del juego.
 * @var {object} resultFinal - Objeto que contiene el div donde se mostrará el resultado final del juego.
 */
const resultDiv   = document.getElementById('result');
const resultFinal = document.getElementById('resultFinal');

/**
 * @var {object} winSelecciones - Objeto que contiene las selecciones que pueden ganar, se hizo de esta manera para que sea más fácil de leer y sea escalable.
 * @example                     - winSelecciones['piedra'] = 'tijeras' - En este caso, la llave 'piedra' es la selección que puede ganar y el valor 'tijeras' es la selección que puede perder.
 * @description                 - El primer valor es la selección que tuvo el usuario, la segunda es la selección que tuvo la computadora, 
 *                                si coinciden significa que el usuario gano si no, significa que perdió.
 * Los empates son cuando las 2 selecciones son iguales, se decide quien gano en el la función {@link decideWinner()}.
 */
const winSelecciones = {
    'piedra': 'tijeras',
    'papel': 'piedra',
    'tijeras': 'papel'
};

/** 
 * @var {object} colorVictory - Objeto que contiene los colores que se le asignarán al resultado final del juego.
 */
const colorVictory = {
  'Ganaste.': 'green',
  'Perdiste.': 'red',
  'Es un empate.': 'blue'
}

/**
 * @function startGame      - Función que se ejecuta cuando se hace click en alguno de los botones.
 * @param    {object} event - Objeto que contiene la información del evento click.
 * @returns  {void}         - No retorna nada el metodo {@link playGame()}
 */
function startGame(event) {
  const userChoice        = event.target.id; // Obtiene el id del elemento que se hizo click, obteniendo el valor del id.
  const computerChoice    = getComputerChoice(); // Obtiene la selección de la computadora.
  const result            = decideWinner(userChoice, computerChoice); // Decide quien gano el juego.
  resultFinal.style.color = colorVictory[result]; // Cambia el color del resultado final.
  resultDiv.textContent   = `Tú elegiste ${userChoice}. La computadora eligió ${computerChoice}.`; // Muestra el resultado del juego.
  resultFinal.textContent = ` ${result}`
}

/**
 * @function getComputerChoice  - Función que obtiene la selección de la computadora.
 * @example                     - Puede  ser 'piedra', 'papel' o 'tijeras'.
 * @returns {string}            - Retorna la selección de la computadora de manera aleatoría.
 */
function getComputerChoice() {
  const options      = ['piedra', 'papel', 'tijeras']; // Contiene las opciones que puede elegir la computadora.
  const randomChoice = Math.floor(Math.random() * 3); // Obtiene un número aleatorio entre 0,1,2.
  return options[randomChoice]; // Retorna la selección de la computadora.
}

/**
 * @function decideWinner           - Función que decide el ganador del juego.
 * @param   {string} userChoice     - Contiene la selección del usuario.
 * @param   {string} computerChoice - Contiene la selección de la computadora.
 * @returns {string}                - Contiene el resultado del juego, puede ser 'Ganaste.', 'Perdiste.' o 'Es un empate.'.
 */
function decideWinner(userChoice, computerChoice) { 
  if (userChoice === computerChoice)  // Si las selecciones son iguales 'Es un empate.'.
    return 'Es un empate.'; 
  return winSelecciones[userChoice] === computerChoice ? 'Ganaste.' : 'Perdiste.';
}


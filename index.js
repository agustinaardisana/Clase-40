const grilla = document.querySelector('.grilla')
const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']

const crearGrilla = (ancho, alto) => {
    const anchoDeGrilla = 50 * ancho
    grilla.style.width = `${anchoDeGrilla}px`

    const obtenerNumeroAlAzar = () => {
        return Math.floor(Math.random(0, 1) * 5)
    }

    const obtenerFrutaAlAzar = () => {
        return items[obtenerNumeroAlAzar()]
    }
    //console.log(obtenerFrutaAlAzar())

    const listaDeFrutas = []

    for (let i = 0; i < alto * ancho; i++) {
        listaDeFrutas[i] = obtenerFrutaAlAzar(items)
    }

    //console.log(listaDeFrutas)

    grilla.innerHTML = ``

    for (let i = 0; i < listaDeFrutas.length; i++) {
        grilla.innerHTML += `<div>${listaDeFrutas[i]}</div>`
    }
}

//crearGrilla(6,6)

let dificultad = prompt(`Selecciona una dificutad: Facil, Moderado o Dificil`)
    if (dificultad == `facil`) {
        console.log(`crear grilla 9`)
        crearGrilla(9,9)
    }
    if (dificultad == `moderado`) {
        console.log(`crear grilla 6`)
        crearGrilla(6,6)
    }
    if (dificultad == `dificil`) {
        console.log(`crear grilla 4`)
        crearGrilla(4,4)
    }

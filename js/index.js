const obtenerLocal = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

const enviarLs = (clave, valor) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}




const contenedor = document.querySelector(".contenedor")

let carro = []

const carritoActualizado = obtenerLocal("carro") || []







const apiCharacters = async () => {
    const url = "https://rickandmortyapi.com/api/character"

    const response = await fetch(url)
    const data = await response.json()
    cards(data.results)

}


const cards = (array) =>{
    const nodos = array.reduce((acc,element) => {
        return acc + `
        <div class="card" id="personaje-${element.id}">
            <div class="card-image">
                <img src="${element.image}" alt="characters">
            </div>
            <div class="card-text">
                <span class="card-name">Nombre: ${element.name}</span>
                <span class="card-name">Origen: ${element.origin.name}</span>
                <span class="card-origin">ID: ${element.id}</span>
                <button id="boton-${element.id}">Agregar</button>
            </div>
        </div>
        `
    }, "")

    contenedor.innerHTML = nodos
}

apiCharacters()







const agregarBtn = async () => {
    const url = "https://rickandmortyapi.com/api/character"
    
    const response = await fetch(url)
    const data = await response.json()
    
    const cards = document.querySelectorAll(".card")
    cards.forEach( elemento => {
        elemento.onclick = () => {
            const id = elemento.id.slice(10)
            const filtrarPersonaje = data.results.filter( elemento => {
                if (elemento.id === Number(id)) {
                    carro.push(elemento)
                    localStorage.setItem("carro", JSON.stringify(carro))
                    actualizarCarrito()
                }
            } )
        }
    })  
    
}

carro = carritoActualizado

const actualizarCarrito = () => {
    let nroCarrito = JSON.parse(localStorage.getItem("carro"))
    let nro= document.querySelector("#numerito")
    if (nroCarrito === null) {
        nro.innerHTML = "0"
    } else {
        nro.innerHTML = nroCarrito.length
    }
}


agregarBtn()


window.addEventListener("load" , function() {
    actualizarCarrito()
    
})



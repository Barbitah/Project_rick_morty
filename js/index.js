const contenedor = document.querySelector(".contenedor")



const apiCharacters = async () => {
    const url = "https://rickandmortyapi.com/api/character"

    const response = await fetch(url)
    const data = await response.json()
    cards(data.results)
    console.log(data.results);

}


const cards = (array) =>{
    const nodos = array.reduce((acc,element) => {
        return acc + `
        <div class="card" id="personaje-${element.id}">
            <div class="card-image">
                <img src="${element.image}" alt="characters">
            </div>
            <div class="card-text">
                <span class="card-name">${element.name}</span>
                <span class="card-origin">${element.id}</span>
                <button id="boton-${element.id}">Agregar</button>
            </div>
        </div>
        `
    }, "")

    contenedor.innerHTML = nodos
}

apiCharacters()

let carro = []

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
                }
            } )
            console.log(filtrarPersonaje)
        }
    })  

}

agregarBtn()
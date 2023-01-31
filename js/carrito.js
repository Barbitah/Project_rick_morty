const enviarLs = (clave, valor) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}
const obtenerLocal = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}


const actualizarCarrito = () => {
    let nroCarrito = JSON.parse(localStorage.getItem("carro"))
    let nro= document.querySelector("#numerito")
    if (nroCarrito === null) {
        nro.innerHTML = "0"
    } else {
        nro.innerHTML = nroCarrito.length
    }
}


document.querySelector("#btn_vaciar").addEventListener("click", () =>{
    localStorage.removeItem("carro")
    location.reload()
})


window.addEventListener("load", () =>{
    actualizarCarrito()
})


const card = (array) => {
    const arr = array.reduce((acc, element) => {
        return acc + `
        <tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.origin.name}</td>
            <td>${element.species}</td>
            <td>$${element.id*1000}</td>
        </tr>
        `
    }, "")
    return arr
}


const cardsCarrito = () => {
    let obL = obtenerLocal("carro")
    document.querySelector(".tbody-class").innerHTML = card(obL)
}

cardsCarrito()
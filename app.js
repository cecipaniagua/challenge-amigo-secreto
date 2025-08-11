let listaDeAmigos = [];

function agregarAmigo() {
    let nombreIngresadoPorUsuario = document.getElementById("amigo").value.trim();
    if (nombreIngresadoPorUsuario) {
        listaDeAmigos.push(nombreIngresadoPorUsuario);
        listarAmigos();
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

function listarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of listaDeAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Necesitás al menos dos amigos para realizar el sorteo.");
        return;
    }

    let indice = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indice];
    listaDeAmigos.splice(indice, 1);

    listarAmigos();
    resultadoSorteo(amigoSorteado);
}

function resultadoSorteo(amigoSorteado) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}


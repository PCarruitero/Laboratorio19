let lista = [];
let index = 0;
async function cargar() {
    for (let i = 1; i <= 12; i++) {
        const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const d = await r.json();
        lista.push(d);
    }
    mostrar();
}
function mostrar() {
    const div = document.getElementById("contenedor");
    div.innerHTML = "";
    const grupo = lista.slice(index, index + 3);
    grupo.forEach(p => {
        div.innerHTML += `
            <div class="card">
                <img src="${p.sprites.front_default}">
                <h3>${p.name}</h3>
                <p>ID: ${p.id}</p>
            </div>
        `;
    });
}
function siguiente() {
    if (index + 3 < lista.length) {
        index += 3;
        mostrar();
    }
}
function anterior() {
    if (index - 3 >= 0) {
        index -= 3;
        mostrar();
    }
}
cargar();
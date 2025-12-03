async function cargar() {
    const div = document.getElementById("contenedor");
    for (let i = 1; i <= 10; i++) {
        const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const d = await r.json();
        div.innerHTML += `
            <div class="card">
                <img src="${d.sprites.front_default}">
                <h3>${d.name}</h3>
                <p>ID: ${d.id}</p>
            </div>
        `;
    }
}
cargar();

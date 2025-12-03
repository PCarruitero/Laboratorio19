async function buscar() {
    const n = document.getElementById("nombre").value;
    const r = document.getElementById("resultado");
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
    const d = await res.json();
    const tipos = d.types.map(t => t.type.name);
    r.innerHTML = `
        <img src="${d.sprites.front_default}">
        <p>${d.name.toUpperCase()}</p>
        <p>Tipos: ${tipos.join(", ")}</p>
    `;
}
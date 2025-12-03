async function buscar() {
    const id = document.getElementById("pokeInput").value;
    const div = document.getElementById("resultado");
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error("No existe");
        const d = await res.json();
        const habilidades = d.abilities.map(h => h.ability.name);
        div.innerHTML = `
            <div class="card">
                <img src="${d.sprites.front_default}">
                <h3>${d.name.toUpperCase()}</h3>
                <p>ID: ${d.id}</p>
                <p>Peso: ${d.weight}</p>
                <p>Altura: ${d.height}</p>
                <p>Habilidades: ${habilidades.join(", ")}</p>
            </div>
        `;
    } catch {
        div.innerHTML = "<p>Pokémon no encontrado</p>";
    }
}
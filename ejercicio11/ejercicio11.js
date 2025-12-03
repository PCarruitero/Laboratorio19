async function buscarStats() {
    const nombre = document.getElementById("inputPokemon").value;
    const div = document.getElementById("resultado");
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!res.ok) throw new Error("No encontrado");
        const data = await res.json();
        let tabla = `
            <table border="1" cellpadding="5">
                <tr><th>Stat</th><th>Valor</th></tr>
        `;
        data.stats.forEach(s => {
            tabla += `
                <tr>
                    <td>${s.stat.name}</td>
                    <td>${s.base_stat}</td>
                </tr>
            `;
        });
        tabla += "</table>";
        div.innerHTML = tabla;

    } catch (err) {
        div.innerHTML = "<p>Pokémon no encontrado</p>";
    }
}

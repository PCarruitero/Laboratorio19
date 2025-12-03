async function verStats() {
    const nombre = document.getElementById("poke").value;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const d = await res.json();
    let html = "<ul>";
    d.stats.forEach(s => {
        html += `<li>${s.stat.name}: ${s.base_stat}</li>`;
    });
    html += "</ul>";
    document.getElementById("salida").innerHTML = html;
}

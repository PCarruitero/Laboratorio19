async function obtenerDatos() {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        if (!res.ok) throw new Error("Error al obtener datos");
        const data = await res.json();
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);
    } catch (e) {
        console.error(e.message);
    }
}
obtenerDatos();
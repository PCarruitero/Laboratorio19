const id = Math.floor(Math.random() * 898) + 1;
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => r.json())
    .then(d => console.log("Aleatorio:", d.name, "(ID:", d.id + ")"));
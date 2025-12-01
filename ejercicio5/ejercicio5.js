fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(res => res.json())
    .then(data => {
        const ul = document.getElementById("lista");
        data.results.forEach(p => {
            const li = document.createElement("li");
            li.textContent = `${p.name} - ${p.url}`;
            ul.appendChild(li);
        });
    });
document.getElementById('btn').addEventListener('click', async () => {
        const id = document.getElementById('pokeId').value;
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!res.ok) throw new Error('No encontrado');
            const data = await res.json();
            console.log('Nombre:', data.name);
        } catch (err) {
            console.error('Error:', err.message);
        }
});
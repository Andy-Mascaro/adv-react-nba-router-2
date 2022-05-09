export async function fetchApi() {
    const resp = await fetch(`https://rickandmortyapi.com/api/character`);
    const info = await resp.json();
    return info.results;
}

export async function fetchById(id) {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const info = await resp.json();
    return info;
}
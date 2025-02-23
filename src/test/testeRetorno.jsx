const fetchPokesTest = async () => {
    const promises = [];

    for (let i = 1; i <= 10; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json())); 
    }
    const results = await Promise.all(promises);

    return results
}

console.log(fetchPokesTest());


module.exports = fetchPokesTest
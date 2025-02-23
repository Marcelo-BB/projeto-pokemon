const fetchPokesTest = require('./testeRetorno');

describe("fetchPokesTest", () => {
    it('o primeiro pokemon deve ser Bulbasaur', async () => {
        const pokemons = await fetchPokesTest();

        expect(pokemons[0].name).toEqual('bulbasaur');
        expect(pokemons[0].id).toBe(1);
    });

    it('deve ter 10 pokemons na array', async () => {
        const pokemons = await fetchPokesTest();

        expect(pokemons).toHaveLength(10);
    })

    it('deve retornar habilidade', async () => {
        const pokemons = await fetchPokesTest();
        expect(pokemons[0].abilities[0].ability.name).toBe('overgrow');
    });
});
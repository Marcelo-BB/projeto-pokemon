import { useState, useEffect, useContext } from "react"
import { ThemeContext, themes } from "../../contexts/themes"
import { Button } from "../../contexts/button/index.jsx"
import { Header, SectionPokes, Pokes, InfoPokes, AddBTN } from '../../estilos.jsx'
import { Link } from "react-router-dom"

export const color = {
    fire: '#FF9C9C',
    grass: '#77DD77',
    electric: '#FFEB61',
    water: '#66CCFF',
    ground: '#E0A96D',
    rock: '#B8A038',
    fairy: '#FFB7FF',
    poison: '#9F5F9F',
    bug: '#D1C000',
    dragon: '#7766EE',
    psychic: '#FF66A3',
    flying: '#C5D7F2',
    fighting: '#D56723',
    normal: '#DADADA'
};


const ContainerCards = () => {
    const [cards, setCards] = useState([])
    const [allPokemons, setAllPokemons] = useState([])
    const [pokemonCount, setNewPokeCount] = useState(10)
    const [name, setName] = useState("")
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchPokemons() {
            const promises = [];
            for (let i = 1; i <= pokemonCount; i++) {
                promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json()));
            }

            const results = await Promise.all(promises);

            const updateResults = await Promise.all(
                results.map(async (pokemon) => {
                    const updatedAbilities = await Promise.all(
                        pokemon.abilities.map(async (ability) => {
                            const respostaHabilidades = await fetch(ability.ability.url)
                            const dataHabilidades = await respostaHabilidades.json()

                            const effectEntry = dataHabilidades.effect_entries.find(entry => entry.language.name === 'en');
                            return {
                                name: ability.ability.name,
                                description: effectEntry.effect
                            }
                        })
                    )
                    return { ...pokemon, abilities: updatedAbilities };
                })
            )

            setAllPokemons(updateResults)
            setCards(updateResults)
        }

        fetchPokemons();
    }, [pokemonCount]);

    const addPokemons = () => {
        setNewPokeCount((oldCount) => oldCount + 10)
    }

    const filtroPokemons = (e) => {
        setName(e.target.value)
        let valorDeBusca = e.target.value
        let pokemonsFiltrados = []

        if (valorDeBusca === "") {
            setCards(allPokemons)
        } else {
            for (let i = 0; i < pokemonCount; i++) {
                (cards.map((pokemon) => {
                    console.log(pokemon.types[i].type.name.includes(valorDeBusca))

                    if (pokemon.types[i].type.name.includes(valorDeBusca)) {
                        pokemonsFiltrados.push(pokemon);
                        setCards(pokemonsFiltrados);
                    }
                }))
            }
        }
    }

    return (
        <main style={{ background: theme.background }}>
            <Header style={{ background: theme.backgroundHeader }}>
                <div>
                    <h1>Projeto Pokedex!</h1>
                    <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Mudar Tema</Button>
                </div>
                <input type="text" placeholder="Search Pokemons by type" value={name} onChange={filtroPokemons} />
            </Header>

            <SectionPokes>
                {cards.map((pokemon) => (
                    <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                        <Pokes>
                            <InfoPokes style={{ backgroundColor: color[pokemon.types[0].type.name] }}>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <h2>{pokemon.name.toUpperCase()}</h2>
                                <h3>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</h3>
                                <h4>Moves: {pokemon.moves.slice(0, 3).map((type) => type.move.name).join(", ")}</h4>
                            </InfoPokes>
                        </Pokes>
                    </Link>
                ))}
            </SectionPokes>
            <AddBTN onClick={() => { addPokemons() }} className="addBTN">Adicionar Pokemons</AddBTN>
        </main>
    )
}

export default ContainerCards
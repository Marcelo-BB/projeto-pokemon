import { useParams, Link} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Header, SectionPokes, DetailedPokes, ItemAbility, InfoPokes, AbilityContainer, ReturnBTN } from '../estilos.jsx'
import { ThemeContext, themes } from "../contexts/themes.jsx"
import { Button } from "../contexts/button/index.jsx";
import { color } from "../components/pokemons-td/index.jsx";

const DetailedCard = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState(null)
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()

            const updatedAbilities = await Promise.all(
                data.abilities.map(async (ability) => {
                    const respostaHabilidades = await fetch(ability.ability.url);
                    const dataHabilidades = await respostaHabilidades.json();

                    const effectEntry = dataHabilidades.effect_entries.find(entry => entry.language.name === 'en');
                    return {
                        name: ability.ability.name,
                        description: effectEntry ? effectEntry.effect : "Descrição não disponível."
                    };
                })
            )
            setPokemon({ ...data, abilities: updatedAbilities });
        }
        fetchData()
    }, [id])

    if (!pokemon) return <p>Carregando...</p>;

    return (
        <main style={{ background: theme.background }}>
            <Header style={{ background: theme.backgroundHeader }}>
                <div>
                    <h1>Projeto Pokedex!</h1>
                    <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Mudar Tema</Button>
                </div>

                <Link to='/'><ReturnBTN>Voltar para a Página Principal</ReturnBTN></Link>
            </Header>

            <SectionPokes>
                <DetailedPokes>
                    <InfoPokes style={{ backgroundColor: color[pokemon.types[0].type.name] }}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <h2>{pokemon.name.toUpperCase()}</h2>
                        <h3>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</h3>
                        <h4>Moves: {pokemon.moves.slice(0, 3).map((move) => move.move.name).join(", ")}</h4>
                    </InfoPokes>

                    <AbilityContainer style={{ background: theme.backgroundCards, color: theme.color }}>
                        {pokemon.abilities.map((ability, index) => (
                            <ItemAbility key={index}>
                                <h3 style={{ color: theme.color }}>
                                    {ability.name.toUpperCase()} Ability:
                                </h3>
                                <p>{ability.description}</p>
                            </ItemAbility>
                        ))}
                    </AbilityContainer>
                </DetailedPokes>
            </SectionPokes>
        </main>
    )

}

export default DetailedCard
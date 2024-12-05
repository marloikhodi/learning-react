import { useEffect } from "react"
import { useState } from "react"

export default function PokemonFetch() {
    const [pokemons, setPokemons] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then((res) => res.json())
            .then((data) => {
                setPokemons(data.results)
                // setLoading(false)
            })

        // .catch((error) => {
        //     setError(error.message)
        //     setLoading(false)
        // })
    })

    return (
        <>
            {/* //     {loading && <p>Carregando...</p>}
        //     {error && <p>Erro: {error}</p>} */}
            <div>
                {pokemons.map((pokemon) => (
                    <p>{pokemon.name}</p>
                ))}
            </div>
        </>
    )
}   
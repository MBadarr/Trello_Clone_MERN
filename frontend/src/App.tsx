import { useGetPokemonByNameQuery } from './services/pokemon'

function App() {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

    return (
        <div className='flex flex-col items-center justify-center'>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <div>{data.species.name}</div>
                    <img src={data.sprites.front_shiny} alt={data.species.name} />
                </>
            ) : null}
        </div>
    )
}

export default App;
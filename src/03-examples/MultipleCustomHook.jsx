import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHook = () => {

   const {counter,decrement, increment} = useCounter(1)

   const { data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
   
  return (
    <>
    <h1>Informacion de Pokemon</h1>
    <hr />

    { 
    isLoading
    ? <LoadingMessage />
    : (
      <PokemonCard 
        name={data.name} 
        id={data.id} 
        sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,
        ]}
      />
      )
    }

    <h2>{data?.name}</h2>

    <button
      className='btn btn-primary mt-2'
      onClick={()=> counter>1? decrement(): null}
    >
    Anterior
    </button>
    <button
    className='btn btn-primary mt-2'
    onClick={()=>increment()}
    >
    Siguiente
    </button>
    </>
  )
}

import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {


  const { counter, increment, decrement, reset } = useCounter(14);

  return (
    <>
        <h1>Counter with hook: { counter }</h1>
        <hr/>
        <button className='btn btn-primary' onClick={()=>increment(5)}>+5</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={()=>decrement(5)}>-5</button>
    </>

  )
}

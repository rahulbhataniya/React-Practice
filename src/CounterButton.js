import React, {useState} from 'react'

export const CounterButton=()=>{
  const [counter,setCounter]=useState(0);
  const CallCounter=()=>{
    setCounter(counter+1);
  }
  return <>
  <h1>value of count={counter}</h1>
  <button onClick={CallCounter}>click for count</button>
  </>
}

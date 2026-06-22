import { useReducer, useState } from 'react'

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' } | { type: 'setTo', payload: number }




function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return 0
        case 'setTo': return action.payload
    }
}

interface Props4Props {
    label: string
}

export default function Props4({ label }: Props4Props) {
    const [count, dispatch] = useReducer(reducer, 0)
    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => {
                dispatch({ type: 'setTo', payload: Number(inputValue) })
                setInputValue('')
            }}>Set</button>

            <h2>{label}: {count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

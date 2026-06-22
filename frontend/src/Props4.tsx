import { useReducer } from 'react'

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return 0
    }
}

interface Props4Props {
    label: string
}

export default function Props4({ label }: Props4Props) {
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h2>{label}: {count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

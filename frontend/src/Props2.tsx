import { useState } from 'react'

interface Props {
  name: string
  mood: string
  color: string
}

function PROPS2({ name, mood, color }: Props) {
  const [selectedName, setSelectedName] = useState(name)
  const [selectedMood, setSelectedMood] = useState(mood)
  const [selectedColor, setSelectedColor] = useState(color)
  const [displayed, setDisplayed] = useState({ name, mood, color })

  return (
    <div style={{ backgroundColor: displayed.color }}>
      <h1>היי {displayed.name}! נראה שאת היום {displayed.mood}</h1>

      <select value={selectedName} onChange={e => setSelectedName(e.target.value)}>
        <option>Bella</option>
        <option>Lotem</option>
        <option>Lior</option>
      </select>

      <select value={selectedMood} onChange={e => setSelectedMood(e.target.value)}>
        <option>🔥</option>
        <option>😊</option>
        <option>😴</option>
      </select>

      <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
        <option>pink</option>
        <option>lightblue</option>
        <option>lavender</option>
      </select>

      <button onClick={() => setDisplayed({ name: selectedName, mood: selectedMood, color: selectedColor })}>
        רענון
      </button>
    </div>
  )
}

export default PROPS2

interface Props {
  name: string
  mood: string
  color: string
}

function PROPS2({ name, mood, color }: Props) {
  return (
    <div style={{ backgroundColor: color }}>
      <h1>היי {name}! נראה שאת היום {mood}</h1>
    </div>
  )
}

export default PROPS2
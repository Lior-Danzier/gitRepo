
import './App.css'
import Props from './Props'
import Weather from './Weather'
import Props4 from './Props4'
import PROPS2 from './Props2'

function App() {
  return (
    <>
      <h1>commit to git by lior</h1>
      <h2>commit to git by Lotem</h2>
      <Props msg="Dev Teams" />
      <Weather />
      <Props4 label="Counter" />
      <PROPS2 name="Bella" mood="🔥" color="pink" />
      <PROPS2 name="Lotem" mood="😊" color="lightblue" />
      <PROPS2 name="Lior" mood="😴" color="lavender" />
    </>
  )
}
export default App  
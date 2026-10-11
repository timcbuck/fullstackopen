import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="Give Feedback"></Header>
      <Button onClick={() => {setGood(good + 1)}} text="good"></Button>
      <Button onClick={() => {setNeutral(neutral + 1)}} text="neutral"></Button>
      <Button onClick={() => {setBad(bad + 1)}} text="bad"></Button>
      <Header text="Statistics"></Header>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export default App
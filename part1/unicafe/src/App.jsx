import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="Give Feedback"></Header>
      <Button onClick={handleGoodClick} text="good"></Button>
      <Button onClick={handleNeutralClick} text="neutral"></Button>
      <Button onClick={handleBadClick} text="bad"></Button>
      <Header text="Statistics"></Header>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {all ? (good - bad) / all : 0}</p>
      <p>positive {all ? good / all : 0}%</p>
    </div>
  )
}

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>



export default App
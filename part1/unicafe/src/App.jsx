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
      <Statistics good={good} neutral={neutral} bad={bad} all={all}></Statistics>
    </div>
  )
}

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return (
      <div>
        <Header text="Statistics"></Header>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
    <Header text="Statistics"></Header>
    <StatisticLine text="good" stat={good}></StatisticLine>
    <StatisticLine text="neutral" stat={neutral}></StatisticLine>
    <StatisticLine text="bad" stat={bad}></StatisticLine>
    <StatisticLine text="all" stat={all}></StatisticLine>
    <StatisticLine text="average" stat={(good - bad) / all}></StatisticLine>
    <StatisticLine text="positive" stat={good / all * 100}></StatisticLine>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.stat}{props.text === "positive" ? "%" : ""}</p>
    </div>
  )
}

export default App
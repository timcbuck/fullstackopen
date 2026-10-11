import { useState } from 'react'

export default function App() {
  // counter is a state variables
  // setCounter is the setter function
  // useState is a React Hook
  // Hooks are special functions that are only available while React is rendering
  const [ counter, setCounter ] = useState(0)
  console.log('rendering...', counter)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  const [ clicks, setClicks ] = useState({ left: 0, right: 0 })
  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })

  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14},
    ]
  }  
  
  return (
    <>
      <Header courseName={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
      <Hello name="Tim" age={33}></Hello>
      <Display counter={counter}></Display>
      <Button onClick={increaseByOne} text="+!"></Button>
      <Button onClick={setToZero} text="reset counter"></Button>
      <Button onClick={handleLeftClick} text="left"></Button>
      <Display counter={clicks.left}></Display>
      <Button onClick={handleRightClick} text="right"></Button>
      <Display counter={clicks.right}></Display>
    </>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Display = ({ counter }) => <div>{counter}</div>

function Header(props) {
  return (
    <>
    <h1>{props.courseName}</h1>
    </>
  )
}

function Content(props) {
  //console.log(props); //prop
  //console.log(props.parts); //array
  return (
    <>
    <Part part={props.parts[0]}></Part>
    <Part part={props.parts[1]}></Part>
    <Part part={props.parts[2]}></Part>
    </>
  )
}

function Total(props) {
  return (
    <>
    <p>exercises of parts {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
    
  )
}

function Part(props) {
  //console.log(props);
  //console.log(props.part);
  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

function Hello({name, age}) {
  return (
    <>
    <p>Hello {name}. You are {age} years old!</p>
    </>
  )
}
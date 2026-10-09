export default function App() {
  const parts = [
    { name: "Fundamentals of React", number: 10 },
    { name: "Using props to pass data", number: 7 },
    { name: "State of a component", number: 14},
  ]

  return (
    <>
      <Header courseName="Half Stack application development"></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </>
  )
}

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
    <p>Number of parts {props.parts[0].number + props.parts[1].number + props.parts[2].number}</p>
    </>
    
  )
}

function Part(props) {
  console.log(props);
  console.log(props.part);
  return (
    <>
      <p>{props.part.name} {props.part.number}</p>
    </>
  )
}
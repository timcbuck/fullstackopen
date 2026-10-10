export default function App() {
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
    <p>exercises of parts {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
    
  )
}

function Part(props) {
  console.log(props);
  console.log(props.part);
  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}
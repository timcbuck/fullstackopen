const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
    ]
  }

  return (
    <>
      <Course course={course}/>
    </>
  )
}

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises, 0
  )

  return (
    <div>
      <Header text={course.name}></Header>
      <Content parts={course.parts}></Content>
      <p>total of {totalExercises} exercises</p>
    </div>
  )
  
}

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <>
    {parts.map(part => (
      <Part
        key={part.id}
        name={part.name}
        exercises={part.exercises}>
      </Part>
    ))}
    </>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

export default App
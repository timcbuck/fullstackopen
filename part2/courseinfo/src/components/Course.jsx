const Course = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises, 0
  )

  return (
    <div>
      <Header text={course.name}></Header>
      <Content parts={course.parts}></Content>
      <h4>total of {totalExercises} exercises</h4>
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

export default Course
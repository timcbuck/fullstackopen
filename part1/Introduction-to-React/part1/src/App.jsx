export default function App() {
  console.log("Start app...");

  const now = new Date();
  const a = 10
  const b = 20

  console.log(now, a+b);

  const friends = [
    {name: "Chris", age: 30},
    {name: "William", age: 31},
  ];


  const friendsArray = ['tom', 'nigel']

  return (
    <>
      <Hello name='Tim' age={32}></Hello>
      <Hello name="Ora" age={37}></Hello>
      <p>Hello world, it is now {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
      <img
        src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <p>{friendsArray}</p>
    </>
  )
}

const Hello = (props) => {
  console.log(props)
  return (
    <>
      <p>Hello, {props.name}. You are {props.age} years old.</p>
    </>
  )
}

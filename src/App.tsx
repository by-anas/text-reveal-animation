import './App.css'
import AnimatedText from "./component/AnimatedText"

function App() {
  return (
    <>
      <div className='text-[3rem] capitalize font-semibold text-blue-300 italic'>
        <AnimatedText
          phrases={`hello, my name is anas....`} />
        <br />
        <AnimatedText
          phrases={`I’m a freelance front-end developer...`} />
        <br />
      </div>

    </>
  )
}

export default App

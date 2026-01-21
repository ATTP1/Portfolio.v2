
import './App.css'
import NavBar from './component/navbar'

function App() {
  

  return (
    <>
    <NavBar/>
      
      <div className='flex flex-col justify-center items-center h-screen '>
        <img src="src/assets/IntroCircle.png" alt="" />
        <h1 className='text-6xl'>TEST</h1>
      </div>

      <div className='w-full h-[50vh] bg-red-200 opacity-20 backdrop-blur-[500px] absolute top-1/2  z-30'>

      </div>
      
    </>
  )
}

export default App

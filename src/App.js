import React, { useEffect, useState } from 'react'
import  FunctionConetextComponent  from './FunctionContextComponent'
import {ThemeProvider} from './ThemeContext'
import Video from './Components/video'
import {Canvas} from '@react-three/fiber'
import Box from './Components/box'  
import axios from 'axios'
// import {Button, Input} from './ui/elements'
import * as Elements from './ui/elements'

function App() {

  const [count, setCount] = useState(2)

  function decrementCount (){
    setCount(count-1)
  }
  
 const incrementCount = () => { setCount(prevCount => prevCount+1) }

 
 const [resourceType, setResourceType] = useState('posts')
 const [items, setItems] =useState([]) 
useEffect (() =>{
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
}, [resourceType])
   
  const[windowWidth, setwindowWidth] = useState(window.innerWidth)
  
  const handleResize = () =>{ setwindowWidth(window.innerWidth)}

  useEffect(() =>{ window.addEventListener('resize', handleResize)
    
  }, [])

  const [name, setName] = useState('')

//fetching data in react js using swapi star wars api
const[data, setData] = useState([])
const fetchData = async () => {
  const res= await axios.get('https://swapi.dev/api/people')
  const {results} = res.fetchData
  setData(results)
}
useEffect(() =>{
  fetchData()
}, [data])
  // const [projectData, setProjectData]=useState([])
  // const endPoint = `https://swapi.dev/api/people/1/${projectData}`

  // useEffect (() =>{
  //   fetchData(endPoint)
  // }, [projectData])
  // const fetchData = async (url) =>{
  //   try {
  //     const response = await fetch(url, {method:'GET',})
  //     const data = await response.json();
  //     const {results} = data
  //     setProjectData(results)
  //     if (!response.ok){
  //       throw new Error(response.statusText);
  //     }
  //   }
  //   catch(e){
  //     console.log(` Error: ${e}`);
  //   }
  // }


 return (
    <>
    <div className="App">
      <button onClick={decrementCount} type="">-</button>
      <span>{count}</span>
      <button onClick={incrementCount} type="">+</button>
    </div>
    <div>
      <button onClick={() => setResourceType('posts')}>posts</button>
      <button onClick={() => setResourceType('users')}>users</button>
      <button onClick={() => setResourceType('comments')}>comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item =>{
      return <pre>{JSON.stringify(item)}</pre>
    })}

      <div>{windowWidth}</div>

    <input value={name} onChange={e => setName(e.target.value)} />
    <div>my name is {name}</div>

    <ThemeProvider>
      <FunctionConetextComponent/> 
    </ThemeProvider>

    <Video src ="assets/videos/video.mp4" title= "video" description="Random video taken from pexels to display on webpage" />
    
   
    <div style={{width: '100vw', height:'100vh'}}>
      <Canvas>
      <ambientLight intensity ={0.3} />
      <Box color="#ff000" position={[3,0,0]} />
      <Box color="#0000ff" position={[-3,0,0]} />
      <Box color="#6a5acd" position={[0, 0, 0]} />
    </Canvas>
    </div>

    <Elements.Button onClick={ () =>{
      console.log('hello')
    }}>
    hello
    </Elements.Button>
    <Elements.Input type='text' onChange={console.log('passed')} />


    </>

  );
}

export default App;

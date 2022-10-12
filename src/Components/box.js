import  {useState, useRef} from 'react'
import {useFrame} from '@react-three/fiber'

function Box({color, ...props}) {
    const[isHovered, setIsHovered] = useState(false)
    const ref= useRef() 
    useFrame(() =>{
        ref.current.rotation.x +=0.01
        ref.current.rotation.y += 0.01
    })
  return (
    <mesh
        ref={ref}
        scale={isHovered ? 1.5 : 1}
        onPointerOver={() => setIsHovered (false)}
        onPointerOut={() => setIsHovered (true)}
        {...props}>
            <pointLight />
            <boxBufferGeometry />
            <meshPhysicalMaterial />
        </mesh>
        )
}

export default Box
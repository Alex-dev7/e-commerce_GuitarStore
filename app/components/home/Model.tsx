import { Center, useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { Group } from "three"

useGLTF.preload('/gibson.glb')

function Model() {
    const group = useRef<Group>(null)
    const {nodes, materials, animations, scene } = useGLTF('/gibson.glb')
  return (
    <group ref={group} >
        <Center position={[0, 0, 0]} rotation={[0, -0.2, 0]} >
            <primitive
                object={scene}
                // scale={[10, 10, 4]}
                
                // position={[0, -3, 0]} // Move down slightly on Y-axis
                // rotation={[0, 0, 10]} // Optional: rotate model 90° around Y
                // rotation={[0.1, -0.3, 0]} 
            />            
        </Center>
    </group>
  )
}

export default Model
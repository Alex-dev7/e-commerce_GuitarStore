import { Center, useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { Group } from "three"

useGLTF.preload('/3dGuitar.glb')

function Model() {
    const group = useRef<Group>(null)
    const {nodes, materials, animations, scene } = useGLTF('/3dGuitar.glb')
  return (
    <group ref={group} >
        <Center>
                   <primitive
                object={scene}
                scale={[58, 58, 2]}
                
                // position={[0, -1, 0]} // Move down slightly on Y-axis
                rotation={[0, 0, 0]} // Optional: rotate model 90° around Y
            />            
        </Center>
    </group>
  )
}

export default Model
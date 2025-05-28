"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, OrbitControls, ContactShadows, Environment, Bounds } from "@react-three/drei"
import DetailsButton from "../ui/details-button"

function Loader() {
  const {progress, active} = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

function Scene() {
  
  return (
    <Canvas  camera={{ position: [-0.1, 0.1, 1.9] }} gl={{antialias: true}} className="h-[500px] max-h-[700px] relative w-full flex place-content-center mx-auto">
        {/* <ambientLight intensity={0.5} /> */}
        {/* <directionalLight position={[10, 6, 10]} intensity={2}/> */}
        {/* <directionalLight position={[30, 10, 10]} intensity={2}/> */}
        {/* <directionalLight position={[10, 10, 10]} intensity={2}/> */}
        {/* <directionalLight position={[20, 10, 90]} intensity={5}/> */}
        {/* <hemisphereLight
      
          // groundColor="#444444"
          // intensity={1}
        /> */}
        {/* <hemisphereLight
        intensity={1}
        // skyColor={'#ffffff'}
        groundColor={'#000000'}
      /> */}
        {/* <pointLight position={[2, 1, 1]} intensity={2} /> */}
        <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={5} blur={1.5} far={2} />
        
        {/* <axesHelper args={[10]}  /> */}
        {/* <gridHelper /> */}
        <Suspense fallback={<Loader />}>
          {/* <OrbitControls /> */}
            <Environment preset="warehouse" />
            <Model />
        </Suspense>
    </Canvas>
  )
}

export default Scene

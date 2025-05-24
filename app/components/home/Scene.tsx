"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html } from "@react-three/drei"

function Loader() {
  const {progress, active} = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

function Scene() {
  
  return (
    <Canvas gl={{antialias: true}} className=" outline">
        <directionalLight position={[-5, -5, 5]} intensity={2}/>
        <Suspense fallback={<Loader />}>
           <Model />
        </Suspense>
    </Canvas>
  )
}

export default Scene
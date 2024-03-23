import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Handle, Position } from 'reactflow'

function Box(props) {
  const ref = useRef()
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}



function Scene() {
    return (
        <Canvas>
        <ambientLight />
            <pointLight position={[3, 3, 3]} />
            <Box position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[3, 3, 3]} />
        </Canvas>
    )
}





export function Output({data}) {
    return (
        <div className='h-80 w-70 rounded-md bg-back overflow-hidden border border-solid border-back'>
        <Handle type="target" position={Position.Left} id="p" style={{top:60}}>
            <div className='text-white relative left-3 bottom-3'>p</div>
        </Handle>
        <Handle type="target" position={Position.Left} id="r" style={{top:100}}>
            <div className='text-white relative left-3 bottom-3'>r</div>
        </Handle>
        <Handle type="target" position={Position.Left} id="s" style={{top:140}}>
            <div className='text-white relative left-3 bottom-3'>s</div>
        </Handle>
            <div className="p-2 bg-orange-500 z-10  text-white">
                Output
            </div>
            <div>
                <Scene />
            </div>
        </div>
    )
}


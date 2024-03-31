import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
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



function Scene(props) {
    return (
        <Canvas className='h-[1000px] w-[1000px]'>
        <ambientLight />
            <pointLight position={[3, 3, 3]} />
            <Box position={props.p} rotation={props.r} scale={props.s} />
        </Canvas>
    )
}





export function Output({data}) {

    const p = useMemo(() => data.p ? [parseInt(data.p.x), parseInt(data.p.y), parseInt(data.p.z)] : [0, 0, 0], [data])
    const r = useMemo(() => data.r ? [parseInt(data.r.x)/57.5, parseInt(data.r.y)/57.5, parseInt(data.r.z)/57.5] : [0, 0, 0], [data])
    const s = useMemo(() => data.s ? [parseInt(data.s.x), parseInt(data.s.y), parseInt(data.s.z)] : [1,1,1], [data])
    useEffect(() => {
        console.log(
            data
        )
        console.log( [r, s, p])
    }, [r, s, p])
    return (
        <div className='h-[600px] w-[600px] rounded-md bg-back overflow-hidden border border-solid border-back flex flex-col items-stretch'>
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
            <div className='flex-1'>
                <Scene p={p} r={r} s={s}/>
            </div>
        </div>
    )
}


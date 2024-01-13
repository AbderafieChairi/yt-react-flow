import { useState } from "react"
import { Handle, Position } from "reactflow"



export default function Rotation({ data }) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [z, setZ] = useState(0)
  return (
    <div className=" w-52 rounded-md bg-back overflow-hidden border border-solid border-back">
      
      <Handle type="source" position={Position.Right} id="b" style={{ top: 30 }} />
      
      <div className="p-2 bg-sky-500 z-10  text-white">
        Rotation
      </div>
      <div className="flex flex-row justify-between p-1">
        <div>x</div>
        <input type="number" className="p-1 bg-white opacity-50 text-sm"
          value={x} onChange={(e) => setX(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between p-1">
        <div>y</div>
        <input type="number" className="p-1 bg-white opacity-50 text-sm"
          value={y} onChange={(e) => setY(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between p-1">
        <div>z</div>
        <input type="number" className="p-1 bg-white opacity-50 text-sm"
          value={z} onChange={(e) => setZ(e.target.value)}
        />
      </div>
    </div>
  )
}





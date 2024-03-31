import { useState } from "react"
import { Handle, Position } from "reactflow"
import { useFlowContext } from "../context/FlowContext";



export default function Scale({ data }) {
  const {updateInputData} = useFlowContext();
  return (
    <div className=" w-52 rounded-md bg-back overflow-hidden border border-solid border-back">
      
      <Handle type="source" position={Position.Right} id="out" style={{ top: 30 }} />
      
      <div className="p-2 bg-purple-500 z-10  text-white">
        Scale- {data.id}-{data.x}-{data.y}-{data.z}
      </div>
      <div className="flex flex-row justify-between p-1">
        <div>x</div>
        <input type="number" className="p-1 bg-white opacity-50 text-sm"
          value={data.x} onChange={(e) => updateInputData(data.id, "x", e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between p-1">
        <div>y</div>
        <input type="number" className="p-1 bg-white opacity-50 text-sm"
          value={data.y} onChange={(e) => updateInputData(data.id, "y", e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between p-1">
        <div>z</div>
        <input type="number" className="p-1 bg-white opacity-50 text-sm"
          value={data.z} onChange={(e) => updateInputData(data.id, "z", e.target.value)}
        />
      </div>
    </div>
  )
}





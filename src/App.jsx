import React from 'react';
import ReactFlow, {
  Controls,
  Background,
} from 'reactflow';

import 'reactflow/dist/style.css';
import { useFlowContext } from './context/FlowContext';
import { Output } from './components/Output';
import PositionNode from "./components/Position";
import RotationNode from "./components/Rotation";
import ScaleNode from "./components/Scale";




const nodeTypes={
  Output:Output,
  Position: PositionNode,
  Rotation: RotationNode,
  Scale: ScaleNode

}






export default function App() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect
} = useFlowContext();



  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background variant="dots" gap={12} size={1}  className='bg-background'/>
      </ReactFlow>
    </div>
  );
}
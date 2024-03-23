
import { createContext, useContext,useCallback, useEffect} from 'react';
import {
    useNodesState,
    useEdgesState,
    addEdge,
  } from 'reactflow';



const FlowContext = createContext({});

export function useFlowContext() {
    return useContext(FlowContext);
}


const initialNodes = [
    { id: '1', position: { x: 500, y: 400 },type:'Output', data: { id:'1' } },
    { id: '2', position: { x: 30, y: 50 },type:'Position', data: { id:'2' } },
    { id: '3', position: { x: 70, y: 50 },type:'Rotation', data: { id:'3' } },
    { id: '4', position: { x: 110, y: 50 },type:'Scale', data: { id:'4' } },
  ];
  const initialEdges = []
    // { id: 'e1-2', source: '1', target: '2' }



export function FlowProvider ({ children }) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);


    const values = {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect
    }
return (
    <FlowContext.Provider value={values}>
        {children}
    </FlowContext.Provider>
    )
};

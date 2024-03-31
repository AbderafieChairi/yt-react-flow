
import { createContext, useContext,useCallback, useEffect, useState, useMemo} from 'react';
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
    { id: '1', position: { x: 500, y: 200 },type:'Output', data: { id:'1' } },
    { id: '2', position: { x: 100, y: 100 },type:'Position', data: { id:'2', x:0, y:0, z:0 } },
    { id: '3', position: { x: 80, y: 300 },type:'Rotation', data: { id:'3', x:0, y:0, z:0 } },
    { id: '4', position: { x: 100, y: 500 },type:'Scale', data: { id:'4', x:0, y:0, z:0 } },
];
  const initialEdges = []
    // { id: 'e1-2', source: '1', target: '2' }



export function FlowProvider ({ children }) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const outpustId = useMemo(() => nodes.filter((n) => n.type === 'Output').map((n) => n.id),[nodes.length])

    const outputsControlNodes = useMemo(() => {
        const out= {}
        outpustId.forEach((id) => {
            out[id] = edges.filter((e) => e.target === id)
        })
        return out
    },[outpustId,edges])


    const updateInputData = (id, key, data) => {
        console.log(id, key, data)
        if (!id || !key || !data) return
        setNodes((nds) => nds.map((n) => (n.id === id ? { ...n, data: { ...n.data, [key]: data } } : n)))
        updateOutputData()
    }



    const updateOutputData = () => {

        Object.keys(outputsControlNodes).map((key) => {
            const controlNodes = outputsControlNodes[key]
            controlNodes.forEach((cn) => {
                setNodes(nodes=>{
                    const data =nodes.find((n) => cn.source == n.id).data;
                    if (!data) return nodes
                    return nodes.map((n) => (n.id === key ? { ...n, data: { ...n.data, [`${cn.targetHandle}`]:data} } : n))
                })
            })
        })
    }




    const values = {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        updateInputData
    }
return (
    <FlowContext.Provider value={values}>
        {children}
    </FlowContext.Provider>
    )
};

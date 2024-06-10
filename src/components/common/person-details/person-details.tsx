'use client';

import {
  Background,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Node,
  type EdgeTypes,
  type NodeTypes,
  type Edge,
} from 'reactflow';
import { BackgroundVariant } from '@reactflow/background';
import 'reactflow/dist/style.css';
import {
  PersonNode,
  FilmNode,
  StarshipNode,
} from '@/components/common/person-details/nodes/';

const edgeTypes = {} satisfies EdgeTypes;
const nodeTypes = {
  'person-node': PersonNode,
  'film-node': FilmNode,
  'starship-node': StarshipNode,
} satisfies NodeTypes;

export default function PersonDetails({
  initialNodes,
  initialEdges,
}: {
  initialNodes: Node[];
  initialEdges: Edge[];
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      defaultNodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
    >
      <Background color="#ccc" variant={BackgroundVariant.Dots} />
    </ReactFlow>
  );
}

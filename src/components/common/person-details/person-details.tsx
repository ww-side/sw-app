'use client';

import {
  Background,
  type Edge,
  type Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import { BackgroundVariant } from '@reactflow/background';
import { edgeTypes, nodeTypes } from '@/types/reactflow';
import 'reactflow/dist/style.css';

export default function PersonDetails({
  initialNodes,
  initialEdges,
}: {
  initialNodes: Node[];
  initialEdges: Edge[];
}) {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      data-testid="person-page"
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

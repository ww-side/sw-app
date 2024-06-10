'use client';

import { Handle, Position, type NodeProps } from 'reactflow';
import Text from '@/components/ui/text';

export default function PersonNode({ data }: NodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md border-2 border-stone-400">
      <div>
        <Text className="text-sm">Character👨‍🚀</Text>
        <Text className="text-lg font-bold">{data.label}</Text>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
}

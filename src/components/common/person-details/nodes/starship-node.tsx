'use client';

import { Handle, Position, type NodeProps } from 'reactflow';
import Text from '@/components/ui/text';

export default function StarshipNode({ data }: NodeProps) {
  return (
    <div className="p-4 shadow-md rounded-md border-2 border-white bg-blue-500">
      <div>
        <Text className="text-base font-bold text-white">{data.label}</Text>
        <Text className="text-white text-center text-xs">starship</Text>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-gray-400"
      />
    </div>
  );
}

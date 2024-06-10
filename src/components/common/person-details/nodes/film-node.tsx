'use client';

import { Handle, Position, type NodeProps } from 'reactflow';
import Text from '@/components/ui/text';

export default function FilmNode({ data }: NodeProps) {
  return (
    <div className="p-4 shadow-md rounded-md border-2 border-white bg-black">
      <div>
        <Text className="text-base font-bold text-white">{data.label}</Text>
        <Text className="text-xs text-center text-white">movie</Text>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-gray-400"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-gray-400"
      />
    </div>
  );
}

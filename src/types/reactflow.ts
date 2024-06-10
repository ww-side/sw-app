import { type EdgeTypes, type NodeTypes } from 'reactflow';
import {
  FilmNode,
  PersonNode,
  StarshipNode,
} from '@/components/common/person-details/nodes';

export const edgeTypes = {} satisfies EdgeTypes;

export const nodeTypes = {
  'person-node': PersonNode,
  'film-node': FilmNode,
  'starship-node': StarshipNode,
} satisfies NodeTypes;

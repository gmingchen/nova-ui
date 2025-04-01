import { PropType } from 'vue';
import { TreeNode } from './tree';

export const treeNodeProps = {
  data: {
    type: Object as PropType<TreeNode>,
    required: true,
  },
}

export type TreeNodeType = PropType<typeof treeNodeProps>

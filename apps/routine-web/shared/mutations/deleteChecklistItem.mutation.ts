import { gql } from 'urql';

export interface DeleteChecklistItemMutationDataType {
  deleteChecklistItem: {
    category: string;
    itemId: string;
    itemOrder: number;
    item: {
      id: string;
      label: string;
      content: string;
      contentType: string;
      tags: string[];
      priority?: number;
      isDone: boolean;
      isArchived: boolean;
    };
  };
}

export interface DeleteChecklistItemMutationPropsType {
  itemId: string;
}

export const deleteChecklistItemMutation = gql`
  mutation deleteChecklistItem($itemId: String!) {
    deleteChecklistItem(itemId: $itemId) {
      itemId
      itemOrder
      category
      item {
        id
        label
        content
        contentType
        tags
        priority
        isDone
        isArchived
      }
    }
  }
`;

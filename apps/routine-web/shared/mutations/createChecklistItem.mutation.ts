import { gql } from 'urql';

export interface CreateChecklistItemMutationDataType {
  createChecklistItem: {
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

export interface CreateChecklistItemMutationPropsType {
  content: string;
  itemOrder: number;
}

export const createChecklistItemMutation = gql`
  mutation createChecklistItem($content: String!, $itemOrder: Float!) {
    createChecklistItem(content: $content, itemOrder: $itemOrder) {
      category
      itemId
      itemOrder
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

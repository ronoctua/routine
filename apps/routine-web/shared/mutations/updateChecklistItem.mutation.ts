import { gql } from 'urql';

export interface UpdateChecklistItemMutationDataType {
  updateChecklistItem: {
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

export interface UpdateChecklistItemMutationPropsType {
  itemId: string;
  itemOrder: number;
  content: string;
  isDone: boolean;
}

export const updateChecklistItemMutation = gql`
  mutation updateChecklistItem(
    $itemId: String!
    $itemOrder: Float!
    $content: String!
    $isDone: Boolean!
  ) {
    updateChecklistItem(
      itemId: $itemId
      itemOrder: $itemOrder
      content: $content
      isDone: $isDone
    ) {
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

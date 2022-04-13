import { gql } from 'urql';

export interface UserQueryDataType {
  user: {
    nickname: string;
    groups: string[];
    items: {
      category: string;
      itemId: string;
      itemOrder: number;
      item: {
        id: string;
        label: string;
        content: string;
        contentType: string;
        tags: string[];
        priority: number | null;
        isDone: boolean;
        isArchived: boolean;
      };
    }[];
  } | null;
}

export const userQuery = gql`
  query {
    user {
      nickname
      groups
      items {
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
  }
`;

import { gql } from 'urql';

interface CreateUserMutationCommonType {
  id: string;
  authId: string;
  nickname: string;
  email: string;
  groups: string[];
}

export type CreateUserMutationDataType = CreateUserMutationCommonType;

export interface CreateUserMutationPropsType
  extends CreateUserMutationCommonType {
  password: string;
}

export const createUserMutation = gql`
  mutation createUser(
    $id: String!
    $authId: String!
    $nickname: String!
    $email: String!
    $password: String!
    $groups: [Group!]!
  ) {
    createUser(
      id: $id
      authId: $authId
      nickname: $nickname
      email: $email
      password: $password
      groups: $groups
    ) {
      id
      authId
      nickname
      email
      nickname
      groups
    }
  }
`;

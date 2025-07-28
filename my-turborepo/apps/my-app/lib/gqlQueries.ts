import {gql} from "graphql-tag";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      content
     authorId
  }
}
`;


export const GET_USER_POSTS= gql`
query GetPostsByUser($userid: Int!) {
  getPostById(id: $userid) {
    content
    createdAt
  }
}

`;
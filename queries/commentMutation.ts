export default gql`
  mutation CREATE_COMMENT(
    $commentOn: Int!
    $content: String!
    $name: String!
    $email: String!
    $website: String
    $parent: ID
  ) {
    createComment(
      input: {
        commentOn: $commentOn
        content: $content
        author: $name
        authorEmail: $email
        authorUrl: $website
        parent: $parent
      }
    ) {
      success
      comment {
        id
        content
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

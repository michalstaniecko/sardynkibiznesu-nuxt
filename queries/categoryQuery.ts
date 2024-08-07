export default gql`
  query getCategory(
    $id: ID!
    $slug: String!
    $perPage: Int!
    $after: String = ""
  ) {
    category(id: $id, idType: SLUG) {
      name
      description
    }
    posts(where: { categoryName: $slug }, first: $perPage, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        excerpt
        slug
        uri
        author {
          node {
            name
            uri
          }
        }
        categories {
          nodes {
            name
            uri
          }
        }
        date
        commentCount
        featuredImage {
          node {
            mediaDetails {
              sizes(include: [SINGLE_DESKTOP]) {
                sourceUrl
                name
                width
                height
              }
              width
              height
            }
            id
            srcSet
            sourceUrl
          }
        }
      }
    }
  }
`;

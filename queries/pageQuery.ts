export default gql`
  query getPageOrCategory(
    $id: ID!
    $slug: String!
    $perPage: Int!
    $after: String = ""
  ) {
    page(id: $id, idType: URI) {
      title
      content
      excerpt
    }
    category(id: $id, idType: SLUG) {
      name
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

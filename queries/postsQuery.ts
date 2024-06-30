export default gql`
  query allPosts($perPage: Int = 10, $after: String = "") {
    posts(first: $perPage, after: $after, where: { status: PUBLISH }) {
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
              }
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

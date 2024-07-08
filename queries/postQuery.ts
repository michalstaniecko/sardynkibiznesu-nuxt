export default gql`
  query getPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      title
      excerpt
      content
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
`;

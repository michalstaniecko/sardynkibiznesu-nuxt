export default gql`
  query getPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      id: databaseId
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
      comments(first: 999) {
        nodes {
          author {
            node {
              avatar {
                url
              }
              email
              name
            }
          }
          date
          content
          databaseId
          parentDatabaseId
        }
      }
    }
  }
`;

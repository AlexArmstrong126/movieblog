import { GraphQLClient, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function reviews(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreatePost(
      $title: String!
      $slug: String!
      $excerpt: String!
      $content: String!
      $score: Int!
      $featuredImage: Asset!
      $featuredPost: Boolean!
    ) {
      createPost(
        data: {
          title: $title
          slug: $slug
          excerpt: $excerpt
          content: $content
          featuredPost: false
          score: $score
          featuredImage: {
            create: { fileName: "$featuredImage", handle: "$featuredImage" }
          }
        }
      ) {
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, req.body);

  return res.status(200).send(result);
}

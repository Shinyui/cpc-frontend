import { GraphQLClient, gql } from "graphql-request";

const GRAPHCMS_COURSE = new GraphQLClient(
  process.env.REACT_APP_HYGRAPH_COURSE_API_ENDPOINT
);

const queryCourses = async () => {
  const query = gql`
    {
      courses {
        id
        title
        description
      }
    }
  `;

  return await GRAPHCMS_COURSE.request(query);
};

const queryCourse = async (id) => {
  const query = gql`
  {
    courses(where: {id: ${JSON.stringify(id)}}) {
      id
      title
      description
      lessons{
        id
        title
        bunnyVideoLibraryId
        bunnyVideoId
      }
    }
  }
  
  `;

  return await GRAPHCMS_COURSE.request(query);
};

export { queryCourses, queryCourse };

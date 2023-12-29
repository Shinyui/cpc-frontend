import { GraphQLClient, gql } from "graphql-request";

const GRAPHCMS_COURSE = new GraphQLClient(
  process.env.REACT_APP_HYGRAPH_COURSE_API_ENDPOINT
);

const GRAPHCMS_BLOG = new GraphQLClient(
  process.env.REACT_APP_HYGRAPH_BLOG_API_ENDPOINT
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

const queryBlogs = async () => {
  const query = gql`
    {
      posts {
        id
        title
        coverPhoto {
          url
        }
      }
    }
  `;

  return await GRAPHCMS_BLOG.request(query);
};

const queryBlog = async (id) => {
  const query = gql`
  {
    posts(where: { id: ${JSON.stringify(id)} }) {
      id
      title
      datePublished
      content {
        raw
      }
      author {
        name
        avatar {
          id
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

  return await GRAPHCMS_BLOG.request(query);
};

export { queryCourses, queryCourse, queryBlogs, queryBlog };

import { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import { astToHtmlString } from "@graphcms/rich-text-html-renderer";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [content, setContent] = useState();

  const sharedClasses = "dark:text-white";
  const bodyClasses = "text-lg text-gray-700";

  const renderers = {
    h1: ({ children }) =>
      `<h1 class="mb-4 text-5xl text-gray-900  ${sharedClasses}">${children}</h1>`,
    h2: ({ children }) =>
      `<h2 class="mb-4 text-4xl text-gray-900 ${sharedClasses}">${children}</h2>`,
    h3: ({ children }) =>
      `<h3 class="text-3xl ${sharedClasses}">${children}</h3>`,
    h4: ({ children }) =>
      `<h4 class="text-2xl ${sharedClasses}">${children}</h4>`,
    h5: ({ children }) =>
      `<h5 class="text-xl ${sharedClasses}">${children}</h5>`,
    h6: ({ children }) =>
      `<h6 class="text-large ${sharedClasses}">${children}</h6>`,
    p: ({ children }) =>
      `<p class="my-4 text-lg ${bodyClasses} ${sharedClasses}">${children}</p>`,
    a: ({ children, href }) =>
      `<a class="my-4 text-lg underline italic ${bodyClasses} ${sharedClasses}" href="${href}" target="_blank">${children}</a>`,
    ul: ({ children }) =>
      `<ul class="list-disc list-inside my-4 text-lg ${bodyClasses} ${sharedClasses}">${children}</ul>`,
    ol: ({ children }) =>
      `<ol class="list-decimal list-inside my-4 text-lg ${bodyClasses} ${sharedClasses}">${children}</ol>`,
    li: ({ children }) =>
      `<li class="my-2 text-lg ${bodyClasses} ${sharedClasses}">${children}</li>`,
    code: ({ children }) =>
      `<code class="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm ${sharedClasses}">${children}</code>`,
    code_block: ({ children }) =>
      `<pre class="bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-sm ${sharedClasses}">${children}</pre>`,
  };

  async function addContent(post) {
    const content = post?.content?.raw?.children;
    const rendered = await astToHtmlString({ content: content, renderers });
    setContent(rendered);
  }

  useEffect(() => {
    const fetchBlogPost = async () => {
      const graphcms = new GraphQLClient(
        "https://api-ap-northeast-1.hygraph.com/v2/clqeptfvwhrfm01t8fidu4it8/master"
      );

      const QUERY = gql`
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

      const resp = await graphcms.request(QUERY);

      setPost(resp?.posts[0]);
      addContent(resp?.posts[0]);
    };

    fetchBlogPost();
  }, []);

  return (
    <div className="lg:w-8/12 md:w-10/12 sm:w-12/12 gap-4 px-8 mx-auto">
      <img
        src={post?.coverPhoto?.url}
        alt=""
        className="max-h-[300px] w-full object-cover rounded-xl mt-8"
      />
      <h1 className="text-4xl text-center mt-8 uppercase">{post?.title}</h1>
      <div className="mt-8" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default BlogPost;

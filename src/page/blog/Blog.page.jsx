import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryBlog } from "../../graphql/query.graphql";
import renderContent from "./renderContent";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchBlog = async () => {
      const resp = await queryBlog(id);
      setBlog(resp?.posts[0]);
      setContent(renderContent(resp?.posts[0]));
    };

    fetchBlog();
  }, []);

  return (
    <div className="lg:w-8/12 md:w-10/12 sm:w-12/12 gap-4 px-8 mx-auto">
      <img
        src={blog?.coverPhoto?.url}
        alt=""
        className="max-h-[300px] w-full object-cover rounded-xl mt-8"
      />
      <h1 className="text-4xl text-center mt-8 uppercase">{blog?.title}</h1>
      <div className="mt-8" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Blog;

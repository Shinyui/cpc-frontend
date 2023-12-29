import { useEffect, useState } from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { queryBlogs } from "../../graphql/query.graphql";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const resp = await queryBlogs();
      setBlogs(resp.posts);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center my-12 uppercase">所有文章</h1>
      <div className="lg:w-8/12 md:w-10/12 sm:w-12/12 gap-4 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
        {blogs?.map((blog) => {
          return (
            <Card
              key={blog.id}
              className="col-span-12 sm:col-span-4 h-[300px]"
              isPressable
              onPress={() => navigate(`/blogs/${blog.id}`)}
            >
              <CardHeader className="absolute z-30 top-1 flex-col !items-start">
                <p className="text-tiny text-black/70 dark:text-white/70 uppercase font-bold">
                  What to watch
                </p>
                <h4 className="text-black dark:text-white font-medium text-large">
                  {blog.title}
                </h4>
              </CardHeader>
              <div className="h-full w-full bg-white/50 dark:bg-black/50 absolute z-20"></div>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={blog?.coverPhoto.url}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

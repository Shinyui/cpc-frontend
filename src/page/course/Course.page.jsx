import { useEffect, useState } from "react";
import { queryCourse } from "../../graphql/query.graphql";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useParams } from "react-router-dom";

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState();
  const [selectedKeys, setSelectedKeys] = useState(new Set([""]));
  const [video, setVideo] = useState({
    bunnyVideoLibraryId: null,
    bunnyVideoId: null,
  });

  useEffect(() => {
    const fetchCourses = async () => {
      const resp = await queryCourse(id);
      setCourse(resp.courses[0]);
      setSelectedKeys(new Set([resp.courses[0].lessons[0].id]));
      setVideo({
        bunnyVideoLibraryId: resp.courses[0].lessons[0].bunnyVideoLibraryId,
        bunnyVideoId: resp.courses[0].lessons[0].bunnyVideoId,
      });
    };

    fetchCourses();
  }, [id]);

  return (
    <div className="p-4 lg:w-10/12 md:w-11/12 sm:w-12/12 mx-auto">
      <h1 className="text-4xl text-center my-12 uppercase">{course?.title}</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-4/5">
          <iframe
            title={video.bunnyVideoId}
            className="w-full aspect-video"
            src={`https://iframe.mediadelivery.net/embed/${video.bunnyVideoLibraryId}/${video.bunnyVideoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`}
            loading="lazy"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className="w-full md:w-1/5 flex flex-col gap-2">
          <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
            <Listbox
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              {course?.lessons.map((lesson) => {
                return (
                  <ListboxItem
                    onPress={() =>
                      setVideo({
                        bunnyVideoLibraryId: lesson.bunnyVideoLibraryId,
                        bunnyVideoId: lesson.bunnyVideoId,
                      })
                    }
                    id={lesson?.id}
                    key={lesson?.id}
                  >
                    {lesson?.title}
                  </ListboxItem>
                );
              })}
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

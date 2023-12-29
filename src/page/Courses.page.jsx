import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { queryCourses } from "../graphql/query.graphql";

const Courses = () => {
  const [courses, setCourses] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const resp = await queryCourses();
      setCourses(resp.courses);
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center my-12 uppercase">課程+</h1>
      <div className="lg:w-8/12 md:w-10/12 sm:w-12/12 gap-4 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
        {courses?.map((course) => {
          return (
            <Card
              className="col-span-12 sm:col-span-4 p-2"
              onPress={() => navigate(`/courses/${course.id}`)}
              isPressable
              isHoverable
            >
              <CardHeader className="overflow-hidden">
                <h2 className="text-left self-start text-2xl truncate">
                  {course?.title}
                </h2>
              </CardHeader>

              <CardBody className="text-lg">
                <p>{course?.description}</p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

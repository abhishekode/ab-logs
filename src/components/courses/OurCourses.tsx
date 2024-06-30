import React from "react";
import { ourCoursedData } from "@/components/Common/Jsondata";
import Link from "next/link";

const OurCourses = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-blue-600 font-bold text-xl">OUR COURSES</h2>
        <p className="text-4xl font-semibold text-center">
          Help you meet your learning <br /> objectives in the shortest time
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="py-20 flex flex-wrap justify-center gap-8">
          {ourCoursedData.map((course) => (
            <Link href={course.link} key={course.id}>
              <div className="w-96 min-h-[26rem] shadow-md transition-all ease-in-out cursor-pointer hover:shadow-2xl flex flex-col border gap-5">
                <div className="h-64 border overflow-hidden">
                  <div className="transition-transform h-full hover:scale-125 hover:shadow-md duration-500 ease-in-out">
                    {course.icon}
                  </div>
                </div>
                <div className="px-6">
                  <h3 className="text-xl font-bold ">{course.title}</h3>
                  <p className="">{course.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;

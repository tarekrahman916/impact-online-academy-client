import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddCourse = () => {
  const [courseFeature, setCourseFeature] = useState("");
  const [courseFeatures, setCourseFeatures] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imgKey = "03f6bb752eaa1e452bf3bc045bed77e3";

  const addFeature = (e) => {
    e.preventDefault();
    setCourseFeature(e.target.value);
    e.target.reset();
  };

  const handleAddFeatures = (e) => {
    e.preventDefault();
    if (courseFeature.length === 0) {
      toast.error("Please Input Feature");
      return;
    }
    setCourseFeatures([...courseFeatures, courseFeature]);
  };

  const handleDeleteFeature = (f) => {
    const remaining = courseFeatures.filter((feature) => feature !== f);
    setCourseFeatures(remaining);
  };

  const handleAddCourse = (data, e) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);

    console.log(formData);

    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData.data.url);

        const course = {
          name: data?.name,
          thumb: data?.thumb,
          image: imgData.data.url,
          features: courseFeatures,
          desc: data?.desc,
          overView: data?.overview,
          video: data?.video,
          instructor: data?.instructor,
        };

        fetch("https://impact-online-academy-server.vercel.app/courses", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(course),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            toast.success("Course Added successfully");
            e.target.reset();
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-50 lg:mx-16">
        <form
          onSubmit={handleSubmit(handleAddCourse)}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 justify-center">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="courseName" className="text-sm">
                  Course Name
                </label>
                <input
                  {...register("name", { required: true })}
                  id="courseName"
                  name="name"
                  type="text"
                  placeholder="Course Name"
                  className="p-2 border w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="instructor" className="text-sm">
                  Instructor
                </label>
                <input
                  {...register("instructor", { required: true })}
                  id="instructor"
                  name="instructor"
                  type="text"
                  placeholder="Instructor"
                  className="p-2 border w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="instructor" className="text-sm">
                  Thumb Image
                </label>
                <input
                  {...register("thumb", { required: true })}
                  id="thumb"
                  name="thumb"
                  type="text"
                  placeholder="thumb"
                  className="p-2 border w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Image
                </label>
                <input
                  {...register("image", { required: true })}
                  id="image"
                  type="file"
                  name="image"
                  className="border text-white w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 "
                  data-temp-mail-org="0"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Featured
                </label>
                <div className="flex">
                  <input
                    id="address"
                    onBlur={addFeature}
                    name="feature"
                    type="text"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                  <button
                    onClick={handleAddFeatures}
                    className="btn btn-sm primaryBtn ml-5"
                  >
                    +
                  </button>
                </div>
                <ul>
                  {courseFeatures.map((f, i) => (
                    <li
                      className="flex justify-between mb-2 text-gray-400"
                      key={i}
                    >
                      {f}
                      <button
                        onClick={() => handleDeleteFeature(f)}
                        className="btn btn-error  btn-xs ml-2"
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="city" className="text-sm">
                  Description
                </label>
                <textarea
                  {...register("desc", { required: true })}
                  id="city"
                  type="text"
                  name="desc"
                  placeholder="Description"
                  className="textarea textarea-bordered w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="zip" className="text-sm">
                  Overview
                </label>
                <textarea
                  {...register("overview", { required: true })}
                  id="city"
                  type="text"
                  name="overview"
                  placeholder="Description"
                  className="textarea textarea-bordered w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-6">
                <label htmlFor="video" className="text-sm">
                  video Link
                </label>
                <input
                  id="overview"
                  {...register("video")}
                  name="video"
                  type="text"
                  placeholder="Video Link"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn primaryBtn">
                Add Product
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddCourse;

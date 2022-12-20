import React from "react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import { toast } from "react-hot-toast";

const AddNotice = () => {
  const date = new Date();
  const noticeDate = format(date, "PP");

  const { data: coursesSpecialties = [] } = useQuery({
    queryKey: ["coursesSpecialties"],
    queryFn: async () => {
      const res = await fetch(
        "https://impact-online-academy-server.vercel.app/coursesSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleNotice = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const noticeFor = e.target.noticeFor.value;

    const notice = {
      title,
      desc,
      noticeFor,
      noticeDate,
    };

    fetch("https://impact-online-academy-server.vercel.app/notices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(notice),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Notice added Successfully");
        e.target.reset();
      });
  };

  return (
    <div>
      <div className="bg-gray-900 lg:w-1/2 mx-auto px-4 py-6 rounded-lg shadow-md shadow-black mt-8">
        <form onSubmit={handleNotice}>
          <h2 className="text-3xl font-bold text-gray-100 text-center mb-6">
            Add Notice
          </h2>

          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered w-full text-black mb-6"
          />
          <textarea
            name="desc"
            className="textarea textarea-bordered w-full "
            placeholder="Description"
          ></textarea>
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text text-white ">Notice For</span>
            </label>
            <select name="noticeFor" className="select select-bordered">
              <option>All</option>

              {coursesSpecialties.map((coursesSpecialty) => (
                <option key={coursesSpecialty._id} value={coursesSpecialty._id}>
                  {coursesSpecialty.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn primaryBtn w-full" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotice;

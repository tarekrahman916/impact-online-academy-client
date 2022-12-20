import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Notice = () => {
  const { data: notices = [] } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const res = await fetch(
        "https://impact-online-academy-server.vercel.app/notices?noticeFor=All"
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(notices);

  return (
    <div className="lg:mx-16 ">
      <h2 className="text-3xl font-bold text-center my-8">All Notice</h2>
      <ul className="mb-8">
        {notices.map((notice) => (
          <li
            key={notice._id}
            className="bg-white p-4 rounded-md shadow-md mb-3"
          >
            <Link
              to={`/notice/${notice._id}`}
              className="text-blue-600 font-bold hover:text-blue-800"
            >
              {notice.title}
            </Link>
            <p>Date: {notice.noticeDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notice;

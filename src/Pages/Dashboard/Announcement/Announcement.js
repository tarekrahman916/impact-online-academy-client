import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const Announcement = () => {
  const { user } = useContext(authContext);

  const { data: notices, isLoading } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const res = await fetch(
        `https://impact-online-academy-server.vercel.app/announcement?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <ul className="my-6">
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

export default Announcement;

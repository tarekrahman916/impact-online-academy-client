import { useQuery } from "@tanstack/react-query";
import React from "react";
import Marquee from "react-fast-marquee";

const NoticeMarquee = () => {
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
  return (
    <div className="bg-slate-700">
      <ul className="flex gap-4 max-w-screen-xl mx-auto rounded-md mb-28">
        <p className="text-xl font-semibold p-2 shadow-xl  bg-gray-800 text-white">
          Notice:
        </p>
        <Marquee gradient={false}>
          {notices.map((notice) => (
            <li key={notice._id} className="mr-5 text-white font-semibold ">
              {notice.title}
            </li>
          ))}
        </Marquee>
      </ul>
    </div>
  );
};

export default NoticeMarquee;

import React from "react";
import { useLoaderData } from "react-router-dom";

const NoticeDetails = () => {
  const notice = useLoaderData();
  console.log(notice);

  return (
    <div className="my-6">
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <h4 className="font-bold text-xl">{notice.title}</h4>
              <span className="text-xs text-gray-400">
                Publish Date: {notice.noticeDate}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-400">
          <p className="mb-8">{notice.desc}</p>
          <hr className="" />
          <div className="text-xl text-white mt-4">
            Thanks,
            <br />
            <p>
              <span className="text-red-600">Impact</span> Academy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const AllNotice = () => {
  const {
    data: notices,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const res = await fetch(
        "https://impact-online-academy-server.vercel.app/notices"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`https://impact-online-academy-server.vercel.app/notices/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Deleted Successfully");
        refetch();
      });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">All Notice</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Publish Date</th>
              <th>Title</th>
              <th>Notice For</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, i) => (
              <tr key={notice._id} className="hover">
                <th>{i + 1}</th>
                <td>{notice?.noticeDate}</td>
                <td>{notice?.title}</td>
                <td>{notice?.noticeFor}</td>
                <td>
                  <button
                    onClick={() => handleDelete(notice._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllNotice;

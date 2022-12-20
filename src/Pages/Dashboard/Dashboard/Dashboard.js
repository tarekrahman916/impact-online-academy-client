import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const { user } = useContext(authContext);

  const { data: loginUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        `https://impact-online-academy-server.vercel.app/users/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(user);

  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
        {user?.photoURL ? (
          <img
            src={user?.photoURL}
            alt=""
            className="w-28 h-28 mx-auto rounded-full bg-gray-500 aspect-square"
          />
        ) : (
          <div className="flex justify-center">
            <UserCircleIcon class="h-32 w-32 text-gray-5" />
          </div>
        )}
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {loginUser?.name}
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-400">
              {loginUser?.email}
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            {loginUser?.role}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

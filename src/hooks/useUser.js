import { useState, useEffect } from "react";

const useUser = (email) => {
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    fetch(`https://impact-online-academy-server.vercel.app/users/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIsUser(data.isUser);
        setIsUserLoading(false);
      });
  }, [email]);
  return [isUser, isUserLoading];
};

export default useUser;

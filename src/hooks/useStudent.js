import { useState, useEffect } from "react";

const useStudent = (email) => {
  const [isStudent, setIsStudent] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://impact-online-academy-server.vercel.app/users/student/${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIsStudent(data.isStudent);
        setIsStudentLoading(false);
      });
  }, [email]);
  return [isStudent, isStudentLoading];
};

export default useStudent;

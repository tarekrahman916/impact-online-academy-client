import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser } = useContext(authContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (data, e) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    setSignUpError("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        navigate("/");
        toast.success("User created successfully");
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
        toast.error(signUpError);
      });
  };

  return (
    <div className="my-8">
      <div className="lg:w-1/2 mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up</h2>
        <p className="text-sm text-center text-gray-400">
          Already you have an account?
          <Link
            to="/login"
            className="focus:underline hover:underline text-white"
          >
            Please Login
          </Link>
        </p>

        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">***</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: "Name is required",
                })}
                id="name"
                placeholder="John Doe"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                data-temp-mail-org="2"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Email address is required",
                })}
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                data-temp-mail-org="2"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character",
                  },
                  pattern: {
                    value: /(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: "Password must have number and special character",
                  },
                })}
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

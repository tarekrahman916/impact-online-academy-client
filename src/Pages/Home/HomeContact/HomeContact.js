import React from "react";
import ContactForm from "../../../components/ContactForm/ContactForm";
import contact from "../../../assets/contact.png";

const HomeContact = () => {
  return (
    <div className="">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-gray-800">
              Let's talk!
            </h2>
          </div>
          <img src={contact} alt="" className="p-6  " />
        </div>
        {/* <form
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid lg:mt-20"
        >
          <div>
            <label for="name" className="text-sm text-gray-800 font-bold">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-800"
            />
          </div>
          <div>
            <label for="email" className="text-sm text-gray-800 font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded bg-gray-800 "
              data-temp-mail-org="1"
            />
          </div>
          <div>
            <label for="message" className="text-sm text-gray-800 font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="border w-full p-3 rounded bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" w-full p-3 text-sm font-bold tracking-wide uppercase rounded btn primaryBtn"
          >
            Send Message
          </button>
        </form> */}
        <ContactForm />
      </div>
    </div>
  );
};

export default HomeContact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import BtnLoader from "../BtnLoader/BtnLoader";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_w9efdbo",
        "template_qjg0hmh",
        form.current,
        "XzoaZWUbmOdYyrlsR"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message send successfully ");
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };
  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 ng-untouched ng-pristine ng-valid lg:mt-20"
      >
        <div>
          <label for="name" className="text-sm text-gray-800 font-bold">
            Full name
          </label>
          <input
            id="name"
            name="user_name"
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
            name="user_email"
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
            name="message"
            rows="3"
            className="border w-full p-3 rounded bg-gray-800"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" w-full p-3 text-sm font-bold tracking-wide uppercase rounded btn primaryBtn"
        >
          {isLoading ? <BtnLoader /> : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

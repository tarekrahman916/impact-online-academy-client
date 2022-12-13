import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="flex flex-col py-6 space-y-6 md:py-0  ng-untouched ng-pristine ng-valid">
        <label className="block">
          <span className="mb-1">Full name</span>
          <input
            type="text"
            placeholder="Leroy Jenkins"
            className="block p-2 border-2 border-primary  w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
          />
        </label>
        <label className="block">
          <span className="mb-1">Email address</span>
          <input
            type="email"
            required
            placeholder="leroy@jenkins.com"
            className="block p-2 border-2 border-primary w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
            data-temp-mail-org="0"
          />
        </label>
        <label className="block">
          <span className="mb-1">Message</span>
          <textarea
            rows="3"
            className="block p-2 border-2 border-primary w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
          ></textarea>
        </label>
        <button type="button" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

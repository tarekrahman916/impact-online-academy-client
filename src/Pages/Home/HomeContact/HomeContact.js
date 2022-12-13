import React from "react";
import ContactForm from "../../../components/ContactForm/ContactForm";

const HomeContact = () => {
  return (
    <section className="my-12">
      <div className="lg:w-1/2 lg:mx-auto mx-3">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Send Your Message
          </h2>
          <p className="font-semibold text-gray-600">
            Have a question? Drop a line & get a reply from our team.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default HomeContact;

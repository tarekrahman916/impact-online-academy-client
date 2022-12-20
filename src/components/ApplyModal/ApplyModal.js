import React from "react";

const ApplyModal = () => {
  return (
    <div>
      <input type="checkbox" id="apply-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="apply-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Apply Now</h3>
          <form>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Phone Number</span>
              </label>
              <input
                required
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered"
                placeholder="Short message"
              ></textarea>
            </div>

            <button type="submit" className="btn primaryBtn mt-5 px-12">
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/aejydzvb", userinfo);
      toast.success("Your message has been sent successfully");
    } catch (e) {
      console.log("Error in sending data to server", e);
      toast.error("Error sending data to server")
    }
  };

  return (
    <div
      name="Contact"
      className="container max-w-screen-xl mx-auto px-4 md:px-20  pt-10"
    >
      <h1 className="w-full text-2xl mb-5 font-bold text-center">Contact</h1>
      <div className="flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-500 w-96 px-8 py-6 rounded-xl "
        >
          <h1 className="text-lg font-bold">Send a Note</h1>
          <div className="flex flex-col mt-4">
            <label className="block text-gray-700" htmlFor="name">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              name="name"
              type="text"
              className="w-full mt-2 p-2 rounded-lg"
              placeholder="Enter Your Name"
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="flex flex-col mt-4">
            <label className="block text-gray-700" htmlFor="email">
              E-mail Address
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              name="email"
              type="text"
              className="w-full mt-2 p-2 rounded-lg"
              placeholder="Enter Your Email-Address"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="flex flex-col mt-4">
            <label className="block text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              name="message"
              className="w-full h-20 mt-2 px-2 rounded-lg"
              placeholder="Write your message here"
            />
            {errors.message && <span className="text-red-500">This field is required</span>}
          </div>
          <button
            type="submit"
            className="text-lg font-bold mt-3 px-3 bg-zinc-500 rounded-xl py-2 hover:bg-slate-300 hover:text-gray-900 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

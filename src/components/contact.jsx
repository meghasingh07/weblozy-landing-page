import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
];

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone must be 10 digits")
        .required("Phone is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      resetForm();
    },  
  });

  return (
    <section className="bg-[#0D172A] text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left md:max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-sky-400 via-white to-sky-400 bg-clip-text text-transparent">
            Build what's next.
          </h1>

          <p className="text-gray-400 mb-8 text-lg">
            Experience the most enjoyable, powerful way for your team to work.
          </p>
          <button className="bg-gradient-to-r from-sky-400 hover:from-sky-500 hover:via-white hover:to-sky-500 text-black px-6 py-3 rounded-xl font-semibold transition">
            Let's Talk
          </button>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full md:max-w-md bg-[#121e32] p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6  bg-gradient-to-r from-sky-400 via-white to-sky-400 bg-clip-text text-transparent">
            Contact Us
          </h2>

          {fields.map((field) => (
            <div key={field.name} className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-300">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                className="w-full p-3 rounded-lg bg-[#0D172A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name]}
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-sky-400 hover:from-sky-500 hover:via-white hover:to-sky-500 text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

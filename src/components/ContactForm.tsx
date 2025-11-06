"use client";

import React from "react";
import { useFormik } from "formik";
import { ContactFormProps } from "@/types/home.type";
import { contactInitialValues, contactValidationSchema } from "@/data/form";

const ContactForm: React.FC<ContactFormProps> = () => {
  const formik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("✅ Form Submitted:", values);
      resetForm();
    },
  });

  const inputClasses =
    "w-full border border-gray-300 p-2 focus:outline-none focus:border-black";
  const errorClasses = "text-red-500 text-sm mt-1";

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 mx-auto font-light"
    >
      {/* Name + Phone */}
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-7">
        <div className="w-full">
          <input
            name="name"
            placeholder="Name*"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClasses}
          />
          {formik.touched.name && formik.errors.name && (
            <p className={errorClasses}>{formik.errors.name}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number*"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClasses}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className={errorClasses}>{formik.errors.phoneNumber}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email*"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={inputClasses}
        />
        {formik.touched.email && formik.errors.email && (
          <p className={errorClasses}>{formik.errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          rows={4}
          placeholder="Message (optional)"
          value={formik.values.message}
          maxLength={250}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={inputClasses}
        />
        {formik.touched.message && formik.errors.message && (
          <p className={errorClasses}>{formik.errors.message}</p>
        )}
      </div>

      {/* Agree + Submit */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formik.values.agree}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-4 h-4"
            />
            I have read and agree to the terms
          </label>
          {formik.touched.agree && formik.errors.agree && (
            <p className={errorClasses}>{formik.errors.agree}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white px-10 py-2 text-[18px] font-medium text-center cursor-pointer hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

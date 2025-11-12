import * as Yup from "yup";

export const contactInitialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  message: "",
  agree: false,
};

export const contactValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(7, "Phone number must be at least 7 digits")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  message: Yup.string().max(250, "Message can't exceed 250 characters"),
  agree: Yup.boolean().oneOf([true], "You must agree to the terms"),
});

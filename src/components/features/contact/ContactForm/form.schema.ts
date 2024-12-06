import * as yup from "yup";

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required("First name is required")
      .min(3, "Full name must be at least 3 characters"),
    subject: yup
      .string()
      .required("Last name is required")
      .min(3, "Subject must be at least 3 characters"),
    email: yup
      .string()
      .required("Last name is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Please enter a valid email address"
      ),
    body: yup
      .string()
      .required("Last name is required")
      .min(3, "Message must be at least 3 characters"),
  })
  .required();

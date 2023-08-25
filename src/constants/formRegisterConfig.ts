import { FormValues } from "../interfaces/forms";

export const initialValues: FormValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
};

export const requiredFields: (keyof FormValues)[] = [
  "username",
  "firstName",
  "lastName",
  "email",
  "password",
  "confirmPassword",
  "phoneNumber",
  "address",
  "city",
  "state",
];

export const fieldInfo: Record<
  keyof FormValues,
  { type: string; placeholder: string }
> = {
  username: { type: "text", placeholder: "Username" },
  firstName: { type: "text", placeholder: "First Name" },
  lastName: { type: "text", placeholder: "Last Name" },
  email: { type: "email", placeholder: "Email" },
  password: { type: "password", placeholder: "Password" },
  confirmPassword: { type: "password", placeholder: "Confirm Password" },
  phoneNumber: { type: "text", placeholder: "Phone Number" },
  address: { type: "text", placeholder: "Address" },
  city: { type: "text", placeholder: "City" },
  state: { type: "text", placeholder: "State" },
};

import { Field } from "./DynamicForm";

export const signupFields: Field[] = [
  {
    id: "title",
    type: "select",
    options: ["Title", "Mr", "Mrs", "Ms", "Dr", "Revd", "Prof"],
    required: true,
    placeholder: "Title",
  },
  { id: "FirstName", type: "text", placeholder: "First name", required: true },
  { id: "LastLame", type: "text", placeholder: "Last name", required: true },
  { id: "email", type: "email", placeholder: "Email", required: true },
  { id: "password", type: "password", placeholder: "Password", required: true },
  {
    id: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    required: true,
  },
];
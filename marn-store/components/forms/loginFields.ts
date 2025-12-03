import { Field } from "./DynamicForm";

export const loginFields: Field[] = [
  { id: "email", type: "email", placeholder: "Email", required: true },
  { id: "password", type: "password", placeholder: "Password", required: true },
];
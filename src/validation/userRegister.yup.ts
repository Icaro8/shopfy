import * as yup from "yup";

export const newUser = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().min(4).required(),
  password: yup.string().min(4).required(),
  id: yup.string().required(),
});

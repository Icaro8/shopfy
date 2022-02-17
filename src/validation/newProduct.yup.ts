import * as yup from "yup";

export const newProduct = yup.object().shape({
  name: yup.string().required(),
  full_name: yup.string().min(5).required(),
  img_url: yup.string().url().required(),
  amount: yup.number().required(),
  description: yup.string().min(10).required(),
});

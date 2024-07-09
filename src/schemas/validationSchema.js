import * as yup from 'yup';

export const validationSchema = yup.object({
  title: yup.string().required("The title is required field"),
  author: yup.string().required("The author is required field"),
  desc: yup.string().required("The description is required field"),
});

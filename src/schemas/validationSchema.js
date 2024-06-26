import * as yup from 'yup';

export const validationSchema = yup.object({
  title: yup.string().required("The title is required field"),
  description: yup.string().required("The description is required field"),
  status: yup.string().required("The status is required field"),
});

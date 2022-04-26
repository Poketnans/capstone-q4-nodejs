import * as yup from 'yup';

const createProjectSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  starts_at: yup.date().required(),
  ends_at: yup.date().required(),
});
export default createProjectSchema;

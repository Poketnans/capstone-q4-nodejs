import * as yup from 'yup';

const updateProjectSchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  starts_at: yup.date(),
  ends_at: yup.date(),
});

export default updateProjectSchema;

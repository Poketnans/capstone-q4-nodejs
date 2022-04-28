import * as yup from 'yup';

const courseSchema = yup.object().shape({
  title: yup.string().required().max(50, 'maximum characters 50 .'),
  address: yup.string().required(),
  id_mode: yup.string().required(),
  id_period: yup.string().required(),
  starts_at: yup.date().required(),
  ends_at: yup.date().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  id_category: yup.string().required(),
  certificate: yup.bool().required(),
});
export default courseSchema;

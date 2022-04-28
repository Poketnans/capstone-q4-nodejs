import * as yup from 'yup';

const courseUpdateSchema = yup.object().shape({
  title: yup.string(),
  address: yup.string(),
  id_mode: yup.string(),
  id_period: yup.string(),
  starts_at: yup.date(),
  ends_at: yup.date(),
  start_time: yup.string().matches(/^((?!0+:00)\d{1,}:[0-5][0-9])$/igm, "should be hour format 00:00-23:00"),
  end_time: yup.string().matches(/^((?!0+:00)\d{1,}:[0-5][0-9])$/igm, "should be hour format 00:00-23:00"),
  id_category: yup.string(),
  certificate: yup.boolean()
});
export default courseUpdateSchema;

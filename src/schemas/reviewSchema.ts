import * as yup from 'yup';

const reviewSchema = yup.object().shape({
  id_course: yup.string().required(),
  comment: yup.string().required(),
  rating: yup.number().required()
})

export default reviewSchema
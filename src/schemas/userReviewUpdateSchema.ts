import * as yup from 'yup';

const userReviewUpdate = yup.object().shape({
  comment: yup.string(),
  rating: yup.number().positive(),
});
export default userReviewUpdate;

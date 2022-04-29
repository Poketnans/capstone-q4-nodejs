import * as yup from 'yup'

const loginSchema = yup.object().shape({
  email: yup.string().email('format invalid for email.').required(),
  password: yup
    .string()
    .required()
    .min(6, 'minimum characters 6')
})

export default loginSchema
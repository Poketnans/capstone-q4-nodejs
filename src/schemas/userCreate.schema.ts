import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const userSchema = yup.object().shape({
  id: yup
    .string()
    .nullable()
    .default(() => uuidv4()),
  name: yup.string().required().max(50, 'maximum characters 50 .'),
  email: yup.string().email('format invalid for email.').required(),
  password: yup
    .string()
    .required()
    .min(6, 'minimum characters 6')
    .transform((value) => bcrypt.hashSync(value, 10)),
  employed: yup.boolean().default(false),
  createdAt: yup
    .date()
    .nullable()
    .default(() => new Date()),
  updatedAt: yup
    .date()
    .nullable()
    .default(() => new Date()),
});
export default userSchema;

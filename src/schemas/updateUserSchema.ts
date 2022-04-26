import bcrypt from 'bcrypt';
import * as yup from 'yup';

interface This {
  path?: string;
  createError?: any;
  originalValue?: string;
}

const updateUserSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, 'maximum characters 50 .')
    .transform((value) =>
      value
        .split(' ')
        .map((word: string) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    ),
  email: yup.string().email('invalid email format').lowercase(),
  password: yup
    .string()
    .transform((value) => bcrypt.hashSync(value, 10))
    .test(
      'minLenghtOf6',
      'password must have min 6 chars',
      function _(value: string) {
        if (value) {
          const { path, createError, originalValue }: This = this;
          if (originalValue.length < 6) {
            return createError({
              path,
              message: 'password must have min 6 chars',
            });
          }
        }
        return true;
      }
    ),
  employed: yup.boolean(),
});

export default updateUserSchema;

import bcrypt from 'bcrypt';
import * as yup from 'yup';
import { getRepository } from 'typeorm';
import User from '../entities/User';

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
  email: yup
    .string()
    .email()
    .lowercase()
    .test('emailUnique', async function _(value: string) {
      if (value) {
        const { path, createError }: This = this;
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ email: value });
        if (user) {
          return createError({
            path,
            message: 'email already exists',
          });
        }
      }
      return true;
    }),
  password: yup
    .string()
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
    )
    .transform((value) => bcrypt.hashSync(value, 10)),
  employed: yup.boolean(),
});

export default updateUserSchema;

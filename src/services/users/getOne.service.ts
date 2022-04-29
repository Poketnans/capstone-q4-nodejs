import { baseUrl } from '../../configs';
import User from '../../entities/User';
import { UserRepository } from '../../repositories';

const getOneService = async (id: string) => {
  const userFounded: Partial<User & { image_url: string }> =
    await new UserRepository().getOneUser(id, ['image']);

  userFounded.image_url = `${baseUrl}/users/image/${userFounded.image.id}`;

  delete userFounded.image;

  if (!userFounded) {
    throw new Error('User not found');
  }

  return userFounded;
};

export default getOneService;

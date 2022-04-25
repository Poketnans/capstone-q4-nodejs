import { UserRepository } from '../../repositories';

const getOneService = async (id: string) => {
  const userFounded = await new UserRepository().getOneUser(id);

  if (!userFounded) {
    throw new Error('User not found');
  }

  return userFounded;
};

export default getOneService;

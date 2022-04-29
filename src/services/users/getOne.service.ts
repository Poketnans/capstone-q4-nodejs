import { UserRepository } from '../../repositories';

const getOneService = async (id: string) => {
  const userFounded = await new UserRepository().getOneUser(id, ["image"]);
  delete userFounded.image.binary
  delete userFounded.image.name
  delete userFounded.image.mimetype
  if (!userFounded) {
    throw new Error('User not found');
  }

  return userFounded;
};

export default getOneService;

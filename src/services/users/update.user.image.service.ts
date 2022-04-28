import { ImageProfileRepository, UserRepository } from '../../repositories';
import { IUserQuery } from '../../repositories/user/interfaces';

const userUpdateImageService = async (user: IUserQuery, image: any) => {
  const foundUser = await new UserRepository().getOneUser(user.id, ['image']);
  await new ImageProfileRepository().updateImage(foundUser.image.id, {
    mimetype: image.mimetype,
    name: image.name,
    binary: image.binary,
  });

  foundUser.image = image;
  await new UserRepository().saveUser(foundUser);
};

export default userUpdateImageService;

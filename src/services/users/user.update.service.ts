import { getRepository } from 'typeorm';
import Image from '../../entities/Image';
import User from '../../entities/User';
import { IUserQuery } from '../../repositories/user/interfaces';

const userUpdateService = async (
  user: IUserQuery,
  image: any /* criar tipo da imagem */
) => {
  const imageRepository = getRepository(Image); // enquanto ainda não tem a função que retorne image no Image repository
  const userRepository = getRepository(User); // enquanto ainda não tem a função que retorne usuário no User repository

  const foundUser = await userRepository.findOne(
    {
      id: user.id, // mockar id do usuário com imagem pra testes (tem que ter imagem)
    },
    { relations: ['image'] }
  );
  await imageRepository.update(
    {
      id: foundUser.image.id,
    },
    { mimetype: image.mimetype, name: image.name, binary: image.binary }
  );
  foundUser.image = image;
  await userRepository.save(foundUser);
};

export default userUpdateService;

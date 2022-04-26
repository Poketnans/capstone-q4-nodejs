import { QueryFailedError } from 'typeorm';
import fs from 'fs';
import dotenv from 'dotenv';
import { IUser } from '../../types/user';
import { ImageProfileRepository, UserRepository } from '../../repositories';
import { ErrorHandler } from '../../errors';
import { IImage } from '../../repositories/imageProfile/interfaces';

dotenv.config();

const createUserService = async (user: IUser) => {
  try {
    const imageInfo: IImage = {
      mimetype: 'mimetype/png',
      name: 'default.png',
      binary: JSON.stringify(
        Buffer.from(
          fs.readFileSync(
            `${
              __dirname.split(
                process.env.NODE_ENV === 'production' ? 'dist' : 'src'
              )[0]
            }assets/default.png`,
            'base64'
          ),
          'base64'
        )
      ),
    };

    const newImage = await new ImageProfileRepository().saveImageProfile(
      imageInfo
    );
    // eslint-disable-next-line no-param-reassign
    user.image = newImage;
    const { password, image, ...newUser } = await new UserRepository().saveUser(
      user
    );
    return newUser;
  } catch (e) {
    if (e instanceof QueryFailedError) {
      throw new ErrorHandler(400, `${e.driverError.detail}`);
    }
    throw new ErrorHandler(400, `${e.message}`);
  }
};
export default createUserService;

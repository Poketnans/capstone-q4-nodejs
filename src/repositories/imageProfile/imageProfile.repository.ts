import { getRepository, Repository } from 'typeorm';
import Image from '../../entities/Image';
import { IImage, ImageProfile } from './interfaces';

class ImageProfileRepository implements ImageProfile {
  private ormRepository: Repository<Image>;

  constructor() {
    this.ormRepository = getRepository(Image);
  }

  saveImageProfile = (imageInfo: IImage) => this.ormRepository.save(imageInfo);

  getOneImage = (imageId: string) =>
    this.ormRepository.findOne({ id: imageId });

  updateImage = (imageId: string, updatedImage: IImage) =>
    this.ormRepository.update({ id: imageId }, updatedImage);
}

export default ImageProfileRepository;

import { getRepository, Repository } from 'typeorm';
import Image from '../../entities/Image';
import { ImageProfile } from './interfaces';

class ImageProfileRepository implements ImageProfile {
  private ormRepository: Repository<Image>;

  constructor() {
    this.ormRepository = getRepository(Image);
  }
}

export default ImageProfileRepository;

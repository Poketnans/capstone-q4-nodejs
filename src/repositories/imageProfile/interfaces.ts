import { UpdateResult } from 'typeorm';

interface IImage {
  mimetype?: string;
  name?: string;
  binary?: string;
}

interface ImageProfile {
  saveImageProfile: (imageInfo: IImage) => Promise<IImage>;
  getOneImage: (imageId: string) => Promise<IImage>;
  updateImage: (imageId: string, updatedImage: IImage) => Promise<UpdateResult>;
}

export { IImage, ImageProfile };

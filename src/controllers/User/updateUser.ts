// import { getRepository } from 'typeorm';
import fs from 'fs';
import { Request, Response } from 'express';
import tempDirCleaner from '../../services/tempDir/tempDirCleaner';

const updateUser = (req: Request, res: Response) => {
  const { file, body } = req;

  const data = JSON.parse(body.data);
  const buffer = Buffer.from(
    fs.readFileSync(`${__dirname.split('src')[0]}${file.path}`, 'base64'),
    'base64'
  );

  const imageInfo = {
    mimetype: file.mimetype,
    name: file.originalname,
    binary: JSON.stringify(buffer),
  };
  tempDirCleaner();

  return res.json();
};
export default updateUser;

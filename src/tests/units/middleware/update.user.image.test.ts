import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import fs from 'fs';
import { Response, Request, NextFunction } from 'express';
import { Readable } from 'typeorm/platform/PlatformTools';
import { PassThrough } from 'stream';
import { updateUserImageValidator } from '../../../middlewares';

interface File {
  mimetype: string;
  originalname: string;
  buffer: Buffer;
  fieldname: string;
  encoding: string;
  size: number;
  stream: Readable;
  destination: string;
  filename: string;
  path: string;
}
const mockedStream = new PassThrough();
describe('validate user image update', () => {
  let mockReq: Partial<Request> = {};
  let mockRes: Partial<Response> = {};
  const nextFx: NextFunction | any = jest.fn();
  const fileInfo: File = {
    mimetype: 'mimetype/png',
    originalname: 'default.png',
    buffer: Buffer.from(
      fs.readFileSync(
        `${__dirname.split('src')[0]}src/assets/default.png`,
        'base64'
      ),
      'base64'
    ),
    fieldname: '',
    encoding: '',
    size: 123456,
    stream: mockedStream,
    destination: '',
    filename: '',
    path: '',
  };
  beforeEach(async () => {
    mockReq = { file: fileInfo };
    mockRes = {
      status: jest.fn().mockReturnValue(mockRes),
    } as Partial<Response>;
  });

  it('should return nothing with status code of 204', async () => {
    console.log('mockReq => ', mockReq);
    console.log('mockRes => ', mockRes);
    updateUserImageValidator(
      mockReq as Request,
      mockRes as Response,
      nextFx as NextFunction
    );
    const expectedStatusCode = 204;
    expect(mockRes.status).toBeCalledWith(expectedStatusCode);
  });
});

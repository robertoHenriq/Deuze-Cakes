import { Injectable } from '@nestjs/common';
import { join } from 'path';


@Injectable()
export class StorageService {

async uploadFile(file: Express.Multer.File) {
  const appUrl = process.env.APP_URL || "http://localhost:3333";
  return `${appUrl}/uploads/${file.filename}`;
}

}
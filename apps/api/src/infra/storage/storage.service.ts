import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { unlink } from 'fs/promises';

@Injectable()
export class StorageService {

  async uploadFile(file: Express.Multer.File) {
    const appUrl = process.env.APP_URL || 'http://localhost:3333';
    return `${appUrl}/uploads/${file.filename}`;
  }

 deleteFileByUrl(url: string) {
  const filename = url.split('/uploads/')[1];
  if (!filename) return;

  const filePath = join(process.cwd(), 'uploads', filename);
  return unlink(filePath).catch(() => {});
}
}

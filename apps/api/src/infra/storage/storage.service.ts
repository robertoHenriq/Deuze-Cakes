import { Injectable } from '@nestjs/common';
import { join } from 'path';


@Injectable()
export class StorageService {
// Local upload: multer already saved the file to ./uploads
// This returns public URL path for the file
async uploadFile(file: Express.Multer.File) {
// multer stored file at ./uploads/<filename>
return `/uploads/${file.filename}`;
}
}
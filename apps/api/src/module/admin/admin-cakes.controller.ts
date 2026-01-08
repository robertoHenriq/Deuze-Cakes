import { Controller, Post, UseInterceptors, UploadedFile, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AdminCakesService } from './admin-cakes.service';
import { extname } from 'path';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';


function filename(
  req: Request, 
  file: Express.Multer.File, 
  cb: (error: Error | null, filename: string) => void
) {
  const name = file.originalname.split('.').slice(0, -1).join('-').replace(/\s+/g, '-');
  cb(null, `${Date.now()}-${name}${extname(file.originalname)}`);
}


@Controller('admin/cakes')
// @UseGuards(AuthGuard('jwt'))
export class AdminCakesController {
constructor(private adminService: AdminCakesService) {}


@Post()
@UseInterceptors(
FileInterceptor('image', {
storage: diskStorage({ destination: './uploads', filename }),
limits: { fileSize: 5 * 1024 * 1024 },
}),
)
async create(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
const priceCents = Math.round(Number(body.price) * 100) || Number(body.price) || 0;
return this.adminService.create({ name: body.name, priceCents, categoryId: body.categoryId ? Number(body.categoryId) : undefined, image: file });
}


@Delete(':id')
async remove(@Param('id') id: string) {
return this.adminService.remove(Number(id));
}
}
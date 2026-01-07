import { Controller, Get, Post, Delete, Param, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CakesService } from './cakes.service';
import { CreateCakeDto } from './dto/create-cake.dto';

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/cakes');
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  },
});

@Controller('cakes')
export class CakesController {
  constructor(private readonly cakesService: CakesService) {}

  @Get()
  async findAll() {
    return this.cakesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cakesService.findOne(+id);
  }

  @Post('admin')
  @UseInterceptors(FileInterceptor('image', { storage }))
  async create(
    @Body() createCakeDto: CreateCakeDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.cakesService.create(createCakeDto, file?.path);
  }

  @Delete('admin/:id')
  async remove(@Param('id') id: string) {
    return this.cakesService.remove(+id);
  }
}

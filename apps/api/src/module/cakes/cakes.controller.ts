import { Controller, Get, Param } from '@nestjs/common';
import { CakesService } from './cakes.service';


@Controller('cakes')
export class CakesController {
constructor(private cakesService: CakesService) {}


@Get()
async findAll() {
return this.cakesService.findAll();
}


@Get(':id')
async findOne(@Param('id') id: string) {
return this.cakesService.findById(Number(id));
}
}
import { Module } from '@nestjs/common';
import { AdminCakesController } from './admin-cakes.controller';
import { AdminCakesService } from './admin-cakes.service';
import { StorageModule } from '../../infra/storage/storage.module';
import { CakesModule } from '../cakes/cakes.module';


@Module({ imports: [StorageModule, CakesModule], controllers: [AdminCakesController], providers: [AdminCakesService] })
export class AdminModule {}
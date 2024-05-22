import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GatheringPointModule } from './gathering-point/gathering-point.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/FFXIV-gathering`,
    ),
    GatheringPointModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

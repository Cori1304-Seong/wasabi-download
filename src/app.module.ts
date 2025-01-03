import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WasabiController } from './wasabi/wasabi.controller';
import { WasabiModule } from './wasabi/wasabi.module';

@Module({
  imports: [WasabiModule],
  controllers: [AppController, WasabiController],
  providers: [AppService],
})
export class AppModule {}

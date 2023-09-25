import { Module } from '@nestjs/common';
import { clientProviders } from './clients';
import { libProviders } from './providers/lib-provider';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from './movies/movies-module';
import { clientsModule } from './clients/clients-module';
import { Global } from '@nestjs/common';

const modules = [MovieModule]
@Global()
@Module({
  imports: [clientsModule, ...modules],
})
export class AppModule {}

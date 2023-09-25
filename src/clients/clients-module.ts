import { Module } from '@nestjs/common';
import { clientProviders } from '.';
import { libProviders } from 'src/providers/lib-provider';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from 'src/movies/movies-module';
import { Global } from '@nestjs/common';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [...clientProviders, ...libProviders],
  exports: [...clientProviders],
})
export class clientsModule {}

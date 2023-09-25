import { Module } from '@nestjs/common';
import { MovieController } from './movies-controller';
import { MovieService } from './movies-service';
import { GetMovieMapper } from './mappers/get-movie-mapper';


@Module({
  imports: [],
  controllers: [MovieController],
  providers: [MovieService,GetMovieMapper],
})
export class MovieModule {}

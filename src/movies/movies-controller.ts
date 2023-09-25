import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movies-service';
import { Param } from '@nestjs/common';
import { Scope } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetMovieResponse } from './models/get-movie-response';
import { GetMovieMapper } from './mappers/get-movie-mapper';

@Controller({
    path: 'movies',
    scope: Scope.REQUEST,
  })
  @ApiTags('Movies')
export class MovieController {
  constructor(
    private readonly MovieService: MovieService,
    private readonly getMovieMapper: GetMovieMapper
  ) {}

  @Get('/:title')
  async getMovie(@Param('title') title: string,): Promise <GetMovieResponse> {
    const response = await this.MovieService.getMovie(title)
    return this.getMovieMapper.map(response);
  }
}

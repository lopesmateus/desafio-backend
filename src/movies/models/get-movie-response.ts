import { ApiProperty } from '@nestjs/swagger';

export class Rating {
  @ApiProperty()
  Source: string;

  @ApiProperty()
  Value: string;
}

export class GetMovieResponse {
  @ApiProperty()
  Title: string;

  @ApiProperty()
  Actors: string;

  @ApiProperty()
  Plot: string;

  @ApiProperty()
  Poster: string;

  @ApiProperty()
  imdbRating: string;

}

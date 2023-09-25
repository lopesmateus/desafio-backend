import { Injectable } from '@nestjs/common';
import { OmdbClient } from 'src/clients/omdb-client/omdb-client';
import { getMovieResponse } from 'src/clients/omdb-client/omdb-client-types';

@Injectable()
export class MovieService {
    constructor(
        private OmdbClient: OmdbClient
      ) {}
  async getMovie(title: string): Promise<getMovieResponse> {
    const { data } = await this.OmdbClient.getMovie({ title })
    return data
  }
}

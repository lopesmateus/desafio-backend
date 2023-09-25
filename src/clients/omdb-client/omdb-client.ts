import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';

import {
  getMovieParams,
  getMovieResponse,
} from './omdb-client-types';
import { version } from 'os';


@Injectable()
export class OmdbClient {
  private baseUrl: string;
  private apiKey: string;

  constructor(
    @Inject('HTTP_CLIENT') private readonly httpClient: typeof axios,
    configService: ConfigService,
  ) {
    this.baseUrl = configService.get('OMDB_API');
    this.apiKey = configService.get('OMDB_APIKEY'); 
  }

  async getMovie({title}:getMovieParams): Promise<
    AxiosResponse<getMovieResponse>
> {
    // console.log(this.baseUrl)
    // console.log(this.apiKey)
    // console.log(`${this.baseUrl}/?apikey=${this.apiKey}&t=${title}`)
    return await this.httpClient.get(
      `${this.baseUrl}?apikey=${this.apiKey}&t=${title}`
    );
  }
}
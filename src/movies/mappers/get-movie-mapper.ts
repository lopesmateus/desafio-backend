import { IMapper } from 'src/contracts'
import { Injectable } from '@nestjs/common'
import { GetMovieResponse } from '../models'
import { getMovieResponse } from 'src/clients/omdb-client/omdb-client-types'

type Params = getMovieResponse
type Response = GetMovieResponse

export type IGetMovieMapper = IMapper<Params, Response>

@Injectable()
export class GetMovieMapper implements IGetMovieMapper {
  map(response: Params): Response {
    return {
        Title: response.Title,
        Plot: response.Plot,
        Actors: response.Actors,
        Poster: response.Poster,
        imdbRating: String(Math.round(Number(response.imdbRating) / 2))
    }
  }

  mapCollection(response: Params[]): Response[] {
    return response.map(this.map.bind(this))
  }
}
export interface IMapper<TResponse = any, TResult = any> {
    map(response: TResponse): TResult
    mapCollection: (response: TResponse[]) => TResult[]
  }
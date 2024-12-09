import { TResponse } from '@/types'

export interface IService<T> {
  findByName?: (name: string) => Promise<T | null>
  findAll?: () => Promise<TResponse<T[]>>
  create?: <K>(data: K) => Promise<T>
  update?: (id: string, data: T) => Promise<T>
  delete?: (id: string) => Promise<T>
}

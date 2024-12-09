import { api } from '@/config'
import { IService } from '@/interfaces'
import { TArtistModel } from '@/models'
import {
  TArtistCreateBody,
  TArtistUpdateBody,
  TAssetType,
  TResponse
} from '@/types'

export class ArtistService implements IService<TArtistModel> {
  private assetType: TAssetType = 'artist'

  findByName = async (name: string) => {
    const { data } = await api.post<TArtistModel>('/query/readAsset', {
      key: {
        '@assetType': this.assetType,
        name
      }
    })
    return data
  }

  findAll = async () => {
    const { data } = await api.post<TResponse<TArtistModel[]>>(
      '/query/search',
      {
        query: {
          selector: {
            '@assetType': this.assetType
          }
        }
      }
    )
    return data
  }

  create = async <K>({
    country,
    name
  }: K extends TArtistCreateBody ? TArtistCreateBody : any) => {
    const { data } = await api.post<TArtistModel>('/invoke/createAsset', {
      asset: [
        {
          '@assetType': this.assetType,
          name,
          country
        }
      ]
    })
    return data
  }

  update = async <K>(
    params: K extends TArtistUpdateBody ? TArtistUpdateBody : any
  ) => {
    const { data } = await api.put<TArtistModel>('/invoke/updateAsset', {
      update: {
        '@assetType': this.assetType,
        '@key': params['@key'],
        country: params.country
      }
    })
    return data
  }

  delete = async (id: string) => {
    const { data } = await api.delete<TArtistModel>('/invoke/deleteAsset', {
      data: {
        key: {
          '@assetType': this.assetType,
          '@key': id
        }
      }
    })
    return data
  }
}

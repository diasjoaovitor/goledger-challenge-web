import { api } from '@/config'
import { IService } from '@/interfaces'
import { TSongModel } from '@/models'
import { TAssetType, TResponse, TSongRequestCreateBody } from '@/types'

export class SongService implements IService<TSongModel> {
  private assetType: TAssetType = 'song'

  findByName = async (name: string) => {
    const { data } = await api.post<TSongModel>('/query/readAsset', {
      key: {
        '@assetType': this.assetType,
        name
      }
    })
    return data
  }

  findAll = async () => {
    const { data } = await api.post<TResponse<TSongModel[]>>('/query/search', {
      query: {
        selector: {
          '@assetType': this.assetType
        }
      }
    })
    return data
  }

  create = async <K>({
    albumKey,
    name
  }: K extends TSongRequestCreateBody ? TSongRequestCreateBody : any) => {
    const { data } = await api.post<TSongModel>('/invoke/createAsset', {
      asset: [
        {
          '@assetType': this.assetType,
          name,
          album: {
            '@assetType': 'album',
            '@key': albumKey
          }
        }
      ]
    })
    return data
  }
}

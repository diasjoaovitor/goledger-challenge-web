import { api } from '@/config'
import { IService } from '@/interfaces'
import { TAlbumModel } from '@/models'
import { TAssetType, TResponse } from '@/types'

export class AlbumService implements IService<TAlbumModel> {
  private assetType: TAssetType = 'album'

  findAll = async () => {
    const { data } = await api.post<TResponse<TAlbumModel[]>>('/query/search', {
      query: {
        selector: {
          '@assetType': this.assetType
        }
      }
    })
    return data
  }
}

import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { StoreEntity } from './store.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class StoreService {
  constructor (
    @InjectRepository(StoreEntity) private readonly storeRepository: Repository<StoreEntity>
  ) {}

  async get (key: string, fallback: string): Promise<string> {
    const store = await this.storeRepository.findOneBy({ key })
    return store === null ? fallback : store.value
  }

  async set (key: string, value: string): Promise<void> {
    const store = await this.storeRepository.findOneBy({ key })
    if (store === null) {
      await this.storeRepository.save({ key, value })
    } else {
      store.value = value
      await this.storeRepository.save(store)
    }
  }
}

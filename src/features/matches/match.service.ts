import { Injectable } from '@nestjs/common'
import { MatchStored } from './match.object'

@Injectable()
export class MatchService {
  private matches: MatchStored[] = []

  getMatches (): MatchStored[] {
    return []
  }

  setMatches (matches: MatchStored[]): MatchStored[] {
    this.matches = matches
    return this.matches
  }
}

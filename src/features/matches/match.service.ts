import { Injectable } from '@nestjs/common'
import { Sitting } from './match.object'

@Injectable()
export class MatchService {
  private matches: Sitting[] = []

  getMatches (): Sitting[] {
    return this.matches
  }

  setMatches (matches: Sitting[]): Sitting[] {
    this.matches = matches
    return this.matches
  }
}

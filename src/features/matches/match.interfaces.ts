import { registerEnumType } from '@nestjs/graphql'

export enum Round {
  QUAL = 'qual',
  Ro16 = 'ro16',
  QF = 'qf',
  SF = 'sf',
  F = 'f'
}

registerEnumType(Round, {
  name: 'Round',
  description: 'The round of the match'
})

export enum MatchStatus {
  UPCOMING = 'upcoming',
  IN_PROGRESS = 'in_progress',
  SCORING = 'scoring'
}

registerEnumType(MatchStatus, {
  name: 'MatchStatus',
  description: 'The status of the match'
})

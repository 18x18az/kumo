
import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name)
  canActivate (context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext()
    const headers = ctx.req.headers
    const auth = headers.authorization

    if (auth === undefined) {
      this.logger.warn('No auth header')
      return false
    }

    if (process.env.MAESTRO_KEY !== auth) {
      this.logger.warn('Invalid auth header')
      return false
    }

    return true
  }
}

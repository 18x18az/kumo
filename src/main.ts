import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import compression from '@fastify/compress'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { logger: ['error', 'warn', 'log'] }
  )
  await app.register(compression)
  app.enableCors()
  await app.listen(1818, '0.0.0.0')
}
void bootstrap()

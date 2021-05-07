import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [InvoicesModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true, envFilePath: [`./.env.development`, `./.env.production`] }),
    MongooseModule.forRoot(process.env.DATABASE_URL,
      { useNewUrlParser: true, useUnifiedTopology: true })]
})
export class AppModule {
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { SurveyModule } from './survey/survey.module';
import { VoteOptionModule } from './voteOption/voteOption.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    SurveyModule,
    VoteOptionModule
  ]
})
export class AppModule {}

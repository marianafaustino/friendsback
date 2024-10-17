import { Module } from '@nestjs/common';
import { FeedbackService } from './adapter/feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/typeorm/entities/feedback.entity';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService],
  imports: [TypeOrmModule.forFeature([FeedbackEntity])]
})
export class FeedbackModule {}

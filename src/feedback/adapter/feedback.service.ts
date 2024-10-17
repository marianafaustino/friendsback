import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/typeorm/entities/feedback.entity';
import { Repository } from 'typeorm';
import { IFeedbackPort } from '../port/feedback.port';

@Injectable()
export class FeedbackService implements IFeedbackPort {

  constructor(
    @InjectRepository(FeedbackEntity)
    private feedbackRepository: Repository<FeedbackEntity>
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto) {
    return await this.feedbackRepository.save(createFeedbackDto); 
  }


  findAll(): Promise<FeedbackEntity[]> {
    return null;
  }

  findOne(id: number): Promise<FeedbackEntity | null> {
    return null;
  }
}

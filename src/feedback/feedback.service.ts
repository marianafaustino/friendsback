import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/typeorm/entities/feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbackService {

  constructor(
    @InjectRepository(FeedbackEntity)
    private feedbackRepository: Repository<FeedbackEntity>
  ) {}

  async criaFeedback(createFeedbackDto: CreateFeedbackDto) {
    const novoFeedbackEntity = this.feedbackRepository.create(createFeedbackDto);
    
    
    return await this.feedbackRepository.save(novoFeedbackEntity);
  }


  findAll() {
    return `This action returns all feedback`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return `This action updates a #${id} feedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}

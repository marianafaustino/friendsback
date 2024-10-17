import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { FeedbackEntity } from 'src/typeorm/entities/feedback.entity'; 

export interface IFeedbackPort {
  create(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackEntity>;
  findAll(): Promise<FeedbackEntity[]>;
  findOne(id: number): Promise<FeedbackEntity | null>;
}
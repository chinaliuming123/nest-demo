import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';

@Injectable()
export class QuestionsService {
  constructor(@InjectRepository(Question)
  private questionRepository: Repository<Question>) { }
  async create(question: CreateQuestionDto, category: CreateCategoryDto[]) {
    const questionData = new Question()
    questionData.text = question.text
    questionData.title = question.title
    questionData.categories = category
    return await this.questionRepository.save(questionData)
  }
}
